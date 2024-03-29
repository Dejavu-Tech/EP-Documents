import React from "react";
import Admonition from "@theme-original/Admonition";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function GithubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function TerminalIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
    );
}

function NoteIcon() {
    return (
        <svg viewBox="0 0 14 16">
            <path
                fillRule="evenodd"
                d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
            />
        </svg>
    );
}
function TipIcon() {
    return (
        <svg viewBox="0 0 12 16">
            <path
                fillRule="evenodd"
                d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
            />
        </svg>
    );
}
function DangerIcon() {
    return (
        <svg viewBox="0 0 12 16">
            <path
                fillRule="evenodd"
                d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
            />
        </svg>
    );
}
function InfoIcon() {
    return (
        <svg viewBox="0 0 14 16">
            <path
                fillRule="evenodd"
                d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
            />
        </svg>
    );
}
function CautionIcon() {
    return (
        <svg viewBox="0 0 16 16">
            <path
                fillRule="evenodd"
                d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
            />
        </svg>
    );
}
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
    note: {
        infimaClassName: "secondary",
        iconComponent: NoteIcon,
        label: (
            <Translate
                id="theme.admonition.note"
                description="The default label used for the Note admonition (:::note)"
            >
                note
            </Translate>
        ),
    },
    tip: {
        infimaClassName: "success",
        iconComponent: TipIcon,
        label: (
            <Translate
                id="theme.admonition.tip"
                description="The default label used for the Tip admonition (:::tip)"
            >
                tip
            </Translate>
        ),
    },
    danger: {
        infimaClassName: "danger",
        iconComponent: DangerIcon,
        label: (
            <Translate
                id="theme.admonition.danger"
                description="The default label used for the Danger admonition (:::danger)"
            >
                danger
            </Translate>
        ),
    },
    info: {
        infimaClassName: "info",
        iconComponent: InfoIcon,
        label: (
            <Translate
                id="theme.admonition.info"
                description="The default label used for the Info admonition (:::info)"
            >
                info
            </Translate>
        ),
    },
    caution: {
        infimaClassName: "warning",
        iconComponent: CautionIcon,
        label: (
            <Translate
                id="theme.admonition.caution"
                description="The default label used for the Caution admonition (:::caution)"
            >
                caution
            </Translate>
        ),
    },
};
// 旧版docusaurus aliases，因兼容性暂时保留
const aliases = {
    secondary: "note",
    important: "info",
    success: "tip",
    warning: "danger",
};
function getAdmonitionConfig(unsafeType) {
    const type = aliases[unsafeType] ?? unsafeType;
    const config = AdmonitionConfigs[type];
    if (config) {
        return config;
    }
    console.warn(
        // 找不到type 为 admonition 时返回打印警告
        `No admonition config found for admonition type "${type}". Using Info as fallback.`,
    );
    return AdmonitionConfigs.info;
}
// 在MDX v1版本中不能使用MDX标题（titles）作为 props 的暂时解决方案
function extractMDXAdmonitionTitle(children) {
    const items = React.Children.toArray(children);
    const mdxAdmonitionTitle = items.find(
        (item) =>
            React.isValidElement(item) &&
            item.props?.mdxType === "mdxAdmonitionTitle",
    );
    const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
    return {
        mdxAdmonitionTitle,
        rest,
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(
        props.children,
    );
    return {
        ...props,
        title: props.title ?? mdxAdmonitionTitle,
        children: rest,
    };
}

const AdmonitionBase = (props) => {
    const {
        children,
        type,
        title,
        icon: iconProp,
    } = processAdmonitionProps(props);
    const typeConfig = getAdmonitionConfig(type);
    const titleLabel = title ?? typeConfig.label;
    const { iconComponent: IconComponent } = typeConfig;
    const icon = iconProp ?? <IconComponent />;
    return (
        <div
            className={clsx(
                ThemeClassNames.common.admonition,
                ThemeClassNames.common.admonitionType(props.type),
                "alert",
                `alert--${typeConfig.infimaClassName}`,
                styles.admonition,
            )}
        >
            <div className={styles.admonitionHeading} {...props.titleProps}>
                <span className={styles.admonitionIcon}>{icon}</span>
                {titleLabel}
            </div>
            <div className={styles.admonitionContent}>{children}</div>
        </div>
    );
};

export default function AdmonitionWrapper(props) {
    if (props.type === "info-tip") {
        return <AdmonitionBase {...props} icon={<TipIcon />} />;
    }
    if (props.type === "additional") {
        return (
            <AdmonitionBase
                {...props}
                type="note"
                icon={<NoteIcon />}
                title="ADDITIONAL INFO"
            />
        );
    }
    if (props.type === "sourcecode") {
        return (
            <AdmonitionBase
                {...props}
                icon={<GithubIcon />}
                title={
                    <a
                        href={props.path}
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginLeft: "4px" }}
                    >
                        VIEW SOURCE CODE &#8594;
                    </a>
                }
                titleProps={{ style: { marginBottom: "-4px" } }}
            >
                {props.children}
            </AdmonitionBase>
        );
    }
    if (props.type === "create-example") {
        return (
            <AdmonitionBase
                {...props}
                type="caution"
                icon={<TerminalIcon />}
                title={
                    <span style={{ marginLeft: "4px" }}>RUN IN YOUR LOCAL</span>
                }
            >
                {props.children}
            </AdmonitionBase>
        );
    }
    return (
        <>
            <AdmonitionBase {...props} />
        </>
    );
}
