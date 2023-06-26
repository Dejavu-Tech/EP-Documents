/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require("dotenv").config();
const path = require("path");

const redirectJson = require("./redirects.json");
const tutorialData = require("./tutorial-units");

/** @type {import('@docusaurus/types/src/index').DocusaurusConfig} */
const siteConfig = {
    title: "Eater Planet 吃货星球",
    tagline: "先进的 B2C 电商解决方案",
    url: "http://localhost:80/",
    baseUrl: "/",
    projectName: "Eater Planet 吃货星球",
    organizationName: "Dejavu Tech.",
    trailingSlash: true,
    favicon: "img/EP_favicon.png",
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    path: "./docs",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/Dejavu-Tech/EP-documentation",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    versions: {
                        current: {
                            label: "2023-alpha",
                        },
                        '5.x.x': {
                            label: '5.x.x',
                            path: 'versioned_docs/version-5.x.x/',
                        },
                    },
                    lastVersion: "5.x.x",
                    admonitions: {
                        tag: ":::",
                        keywords: [
                            "additional",
                            "note",
                            "tip",
                            "info-tip",
                            "info",
                            "caution",
                            "danger",
                            "sourcecode",
                            "create-example",
                        ],
                    },
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/split-pane.css"),
                        require.resolve("./src/css/demo-page.css"),
                    ],
                },
                gtag: {
                    trackingID: "G-27Z1WY952H",
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["en", "zh-CN"],
        path: 'i18n',
        localeConfigs: {
            "en": {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
                calendar: 'gregory',
                path: 'en',
            },
            "zh-CN": {
                label: 'zh-CN',
                direction: 'ltr',
                htmlLang: 'zh-CN',
                calendar: 'gregory',
                path: 'zh-CN',
            },
        },
    },
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: redirectJson.redirects,
            },
        ],
        [
            "docusaurus-plugin-copy",
            {
                id: "Copy Workers",
                path: "static/workers",
                context: "workers",
                include: ["**/*.{js}"],
            },
        ],
        async function tailwindcss() {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        "./plugins/checklist.js",
        [
            "./plugins/blog-plugin.js",
            {
                blogTitle: "Blog",
                blogDescription: "A Docusaurus powered blog!",
                routeBasePath: "/blog",
                postsPerPage: 12,
                blogSidebarTitle: "All posts",
                blogSidebarCount: 0,
                feedOptions: {
                    type: "all",
                    copyright: `Copyright © ${new Date().getFullYear()} Dejavu.Tech.`,
                },
            },
        ],
    ],
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/vsDark"),
            darkTheme: require("prism-react-renderer/themes/vsDark"),
            magicComments: [
                {
                    className: "theme-code-block-highlighted-line",
                    line: "highlight-next-line",
                    block: { start: "highlight-start", end: "highlight-end" },
                },
                {
                    className: "code-block-hidden",
                    line: "hide-next-line",
                    block: { start: "hide-start", end: "hide-end" },
                },
            ],
        },
        image: "img/new-ep.svg",
        algolia: {
            appId: "CJA938BLYU",
            apiKey: "f702fcfcf449bc0bbe3ab85a2e5011f4",
            indexName: "ch871",
            "searchableAttributes": ["title", "content"],
            contextualSearch: true,
        },
        metadata: [
            {
                name: "keywords",
                content:
                    "react-admin, react-framework, internal-tool, admin-panel, ant-design, material ui, mui",
            },
        ],
        navbar: {
            logo: {
                alt: "吃货星球",
                src: "img/EP_logo.png",
            },
            items: [
                // { to: "blog", label: "博客", position: "left" },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: "https://github.com/Dejavu-Tech/EP-WechatApp/",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
            ],
        },
        footer: {
            logo: {
                alt: "Eater Planet",
                src: "/img/EP_logo.png",
            },
            links: [
                {
                    title: "资源",
                    items: [
                        {
                            label: "开始",
                            to: "docs",
                        },
                        {
                            label: "部署教程",
                            to: "docs/tutorial/introduction/index/",
                        },
                        {
                            label: "社区团购文档",
                            to: "blog",
                        },
                    ],
                },
                {
                    title: "产品",
                    items: [
                        {
                            label: "客户案例",
                            to: "examples",
                        },
                        {
                            label: "定制方案",
                            to: "integrations",
                        },
                    ],
                },
                {
                    title: "Company",
                    items: [
                        {
                            label: "关于我们",
                            to: "about",
                        },
                        {
                            label: "EP-吃货星球主题商店",
                            to: "https://store.e-p.io",
                        },
                        {
                            label: "加入我们",
                            to: "join-us",
                        },
                    ],
                },
                {
                    title: "__LEGAL",
                    items: [
                        {
                            label: "License",
                            to: "https://rexotech.cn/LICENSE",
                        },
                        {
                            label: "服务协议",
                            to: "/enterprise",
                        },
                        {
                            label: "隐私政策",
                            to: "/privacy-policy",
                        },
                    ],
                },
                {
                    title: "__SOCIAL",
                    items: [
                        {
                            href: "https://github.com/Dejavu-Tech/EP-WechatApp/",
                            label: "github",
                        },
                        {
                            href: "http://wpa.qq.com/msgrd?v=3&uin=142997&site=qq&menu=yes",
                            label: "QQ",
                        },
                        {
                            href: "https://github.com/Dejavu-Tech/EP-WechatApp/",
                            label: "WeCom",
                        },
                        {
                            href: "https://github.com/Dejavu-Tech/EP-WechatApp/",
                            label: "linkedin",
                        },
                    ],
                },
            ],
        },
    },
    customFields: {
        /** Footer */
        footerDescription:
            '<strong style="font-weight:700;">Eater Planet 吃货星球</strong> 是基于 Go 和 React 开发的 100% 开源无头电子商务 B to C 解决方案。适用于社区团购、零售、餐饮、美容美发等多个行业，提供行业标准和客制化运营定制',
        contactTitle: "版权所有",
        contactDescription: [
            "蒂佳芙科技（云南）有限公司",
            "EP-Project 开源项目组",
        ],
        contactEmail: "ep@rexotech.cn",
        /** ---- */
        /** Live Preview */
        LIVE_PREVIEW_URL:
            process.env.LIVE_PREVIEW_URL ?? "http://localhost:3030/preview",
        /** ---- */
        tutorial: tutorialData,
    },
};

module.exports = siteConfig;
