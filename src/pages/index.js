import React from "react";
import Layout from "@theme/Layout";
import LazyLoad from "react-lazyload";
import Head from "@docusaurus/Head";

import { Landing } from "../components/landing";

function Home() {
    React.useEffect(() => {
        return () => {
            // 滚动到顶部，设置 0 Timeout
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        };
    }, []);

    return (
        <>
            <Head>
                <html data-page="index" data-customized="true" />
            </Head>
            <Layout
                title={`B2C 解决方案专家`}
                description="新版 EATER PLANET 吃货星球是基于 Go 和 React 开发的 100% 开源无头电子商务 B to C 解决方案。适用于社区团购、零售、餐饮、美容美发等多个行业，开箱即用，提供行业标准和客制化运营定制"
            >
                <Landing />
            </Layout>
        </>
    );
}

export default Home;
