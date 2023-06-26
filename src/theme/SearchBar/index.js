import React, { useState, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import { isRegexpStringMatch, useSearchLinkCreator } from "@docusaurus/theme-common";
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import { useAlgoliaContextualFacetFilters } from "@docusaurus/theme-search-algolia/client";
import Translate from "@docusaurus/Translate";
import translations from "@theme/SearchTranslations";
let DocSearchModal = null;
function Hit({ hit, children }) {
    return <Link to={hit.url}>{children}</Link>;
}
function ResultsFooter({ state, onClose }) {
    const createSearchLink = useSearchLinkCreator();
    return (
        <Link to={createSearchLink(state.query)} onClick={onClose}>
            <Translate
                id="theme.SearchBar.seeAll"
                values={{ count: state.context.nbHits }}
            >
                {"See all {count} results"}
            </Translate>
        </Link>
    );
}
function mergeFacetFilters(f1, f2) {
    const normalize = (f) => (typeof f === "string" ? [f] : f);
    return [...normalize(f1), ...normalize(f2)];
}
function DocSearch({ contextualSearch, externalUrlRegex, ...props }) {
    const { siteMetadata } = useDocusaurusContext();
    const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
    const configFacetFilters = props.searchParameters?.facetFilters ?? [];
    const facetFilters = contextualSearch
        ? // 合并上下文搜索筛选器与配置筛选器
          mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
        : // ... 或使用facetFilters配置
          configFacetFilters;
    // 允许用户覆盖默认搜索参数
    const searchParameters = {
        ...props.searchParameters,
        facetFilters,
    };
    const { withBaseUrl } = useBaseUrlUtils();
    const history = useHistory();
    const searchContainer = useRef(null);
    const searchButtonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [initialQuery, setInitialQuery] = useState(undefined);
    const importDocSearchModalIfNeeded = useCallback(() => {
        if (DocSearchModal) {
            return Promise.resolve();
        }
        return Promise.all([
            import("@docsearch/react/modal"),
            import("@docsearch/react/style"),
            import("./styles.css"),
        ]).then(([{ DocSearchModal: Modal }]) => {
            DocSearchModal = Modal;
        });
    }, []);
    const onOpen = useCallback(() => {
        importDocSearchModalIfNeeded().then(() => {
            searchContainer.current = document.createElement("div");
            document.body.insertBefore(
                searchContainer.current,
                document.body.firstChild,
            );
            setIsOpen(true);
        });
    }, [importDocSearchModalIfNeeded, setIsOpen]);
    const onClose = useCallback(() => {
        setIsOpen(false);
        searchContainer.current?.remove();
    }, [setIsOpen]);
    const onInput = useCallback(
        (event) => {
            importDocSearchModalIfNeeded().then(() => {
                setIsOpen(true);
                setInitialQuery(event.key);
            });
        },
        [importDocSearchModalIfNeeded, setIsOpen, setInitialQuery],
    );
    const navigator = useRef({
        navigate({ itemUrl }) {
            // Algolia 结果可能包含来自其他域的URL，这些URL无法通过历史记录提供，应使用 window.location 进行导航
            if (isRegexpStringMatch(externalUrlRegex, itemUrl)) {
                window.location.href = itemUrl;
            } else {
                history.push(itemUrl);
            }
        },
    }).current;
    const transformItems = useRef((items) =>
        items.map((item) => {
            // 如果Algolia包含外部域，应在没有相对URL路径的情况下导航
            if (isRegexpStringMatch(externalUrlRegex, item.url)) {
                return item;
            }
            // 将绝对路径转换为相对路径
            const url = new URL(item.url);
            return {
                ...item,
                url: withBaseUrl(`${url.pathname}${url.hash}`),
            };
        }),
    ).current;
    const resultsFooterComponent = useMemo(
        () =>
            // eslint-disable-next-line react/no-unstable-nested-components
            (footerProps) =>
                <ResultsFooter {...footerProps} onClose={onClose} />,
        [onClose],
    );
    const transformSearchClient = useCallback(
        (searchClient) => {
            searchClient.addAlgoliaAgent(
                "docusaurus",
                siteMetadata.docusaurusVersion,
            );
            return searchClient;
        },
        [siteMetadata.docusaurusVersion],
    );
    useDocSearchKeyboardEvents({
        isOpen,
        onOpen,
        onClose,
        onInput,
        searchButtonRef,
    });
    return (
        <>
            <Head>
                {/* 浏览器将从Algolia加载数据，并允许预连接到DocSearch集群使第一次查询更快 */}
                <link
                    rel="preconnect"
                    href={`https://${props.appId}-dsn.algolia.net`}
                    crossOrigin="anonymous"
                />
            </Head>

            <DocSearchButton
                onTouchStart={importDocSearchModalIfNeeded}
                onFocus={importDocSearchModalIfNeeded}
                onMouseOver={importDocSearchModalIfNeeded}
                onClick={onOpen}
                ref={searchButtonRef}
                translations={translations.button}
                className="ep-docsearch-button"
            />

            {isOpen &&
                DocSearchModal &&
                searchContainer.current &&
                createPortal(
                    <DocSearchModal
                        onClose={onClose}
                        initialScrollY={window.scrollY}
                        initialQuery={initialQuery}
                        navigator={navigator}
                        transformItems={transformItems}
                        hitComponent={Hit}
                        transformSearchClient={transformSearchClient}
                        {...(props.searchPagePath && {
                            resultsFooterComponent,
                        })}
                        {...props}
                        searchParameters={searchParameters}
                        placeholder={translations.placeholder}
                        translations={translations.modal}
                    />,
                    searchContainer.current,
                )}
        </>
    );
}
export default function SearchBar() {
    const { siteConfig } = useDocusaurusContext();
    return <DocSearch {...siteConfig.themeConfig.algolia} className="asd" />;
}
