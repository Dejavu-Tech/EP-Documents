import React, {useEffect, useState} from "react";
import Link from "@docusaurus/Link";

import {motion, useScroll, useTransform} from "framer-motion";
import {ArrowIcon, ChevronRight, ScrollIcon} from "../icons";
import {useTWBreakpoints} from "../../../hooks/use-tw-breakpoints";

export const SectionHero: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    const imgRef = React.useRef(null);

    const [height, setHeight] = React.useState(0);

    // onLoad 渲染后计算第一张图片 height
    const handleImgLoad = () => {
        if (imgRef.current) {
            setHeight(imgRef.current.offsetHeight);
        }
    };

    const {md, lg} = useTWBreakpoints();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const caretPosition = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["30%", "0%"],
    );

    const tileTextPosition = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["-4.5rem", "-9rem"],
    );

    const tileImgPosition = useTransform(
        scrollYProgress,
        [0.5, 0],
        ["0rem", "4.5rem"],
    );

    // 计算第一张图片的 translateY 值
    const image1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    // 计算第二张图片的 translateY 值
    const image2Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    return (
        // 视口滚动容器
        <motion.div
            ref={ref}
            className="h-auto lg:h-[200vh] bg"
            style={{
                backgroundImage:
                    `url("/img/EP-back.svg")`,
                backgroundSize: "cover",
            }}
        >
            <div className="hidden w-full h-px -mb-px lg:snap-start lg:block"/>
            {/* 滚动动画 */}
            <motion.div
                className="relative top-0 left-0 flex flex-col justify-center w-full h-auto max-w-screen-xl pt-20 mx-auto -mt-10 lg:h-screen lg:sticky px-7 lg:pt-0 short:pt-16 lg:mt-0">
                <div className="flex flex-col gap-12 pt-0 sm:pt-10 lg:pt-16 lg:flex-row lg:gap-0">
                    <div className="heading mx-auto md:mx-10 lg:mx-0 flex flex-[2] gap-6">
                        <div className="caret-wrapper relative py-2.5 w-[33px]">
                            <motion.div
                                transition={
                                    !lg
                                        ? {
                                            yoyo: Infinity,
                                            ease: "easeInOut",
                                            duration: 3.5,
                                            delay: 0.5,
                                        }
                                        : {}
                                }
                                style={{
                                    position: "absolute",
                                    bottom: lg ? caretPosition : undefined,
                                }}
                                animate={
                                    lg
                                        ? {}
                                        : {
                                            bottom: [
                                                ...(md
                                                    ? [
                                                        "25%",
                                                        "25%",
                                                        "25%",
                                                        "25%",
                                                        "0%",
                                                        "0%",
                                                        "0%",
                                                        "0%",
                                                    ]
                                                    : [
                                                        "30%",
                                                        "30%",
                                                        "30%",
                                                        "30%",
                                                        "0%",
                                                        "0%",
                                                        "0%",
                                                        "0%",
                                                    ]),
                                            ],
                                        }
                                }
                            >
                                <ArrowIcon width={30} height={30}/>
                            </motion.div>
                        </div>
                        <div
                            className="line-wrapper text-white flex flex-wrap items-center m-auto tracking-tighter pt-10 lg:pt-16 leading-[32px] md:leading-[65px] lg:leading-[50px] xl:leading-[60px]">
                            <div className="w-10/12">
                                <img src="/img/EP-landing.svg" alt="EP Logo"/>
                            </div>
                            <div
                                className="font-bold my-4 text-[2rem] md:text-[3.5rem] lg:text-[3rem] xl:text-[3.75rem]">
                                吃货星球社区团购
                            </div>
                            <div
                                className="font-normal mb-4 text-[1.5rem] md:text-[1.825rem] lg:text-[2rem] xl:text-[3rem]">
                                ThinkPHP | Wechat
                            </div>
                            <div className="font-bold text-[2rem] md:text-[3.5rem] lg:text-[3rem] xl:text-[3.75rem]">
                                微信小程序
                            </div>
                        </div>
                    </div>
                    <div

                        className="tiles flex-[2] sm:pr-7 mx-auto lg:mx-0 min-w-[270px] max-w-[670px] sm:max-w-none lg:min-w-0 text-lg sm:text-xl lg:text-2xl font-medium text-[#1890FF]">
                        <motion.div

                            transition={
                                !lg
                                    ? {
                                        yoyo: Infinity,
                                        ease: "easeInOut",
                                        duration: 3.5,
                                        delay: 0.5,
                                    }
                                    : {}
                            }
                            style={
                                lg
                                    ? {
                                        position: "absolute",
                                        translateY: tileTextPosition,
                                        opacity: image1Opacity
                                    }
                                    : {}
                            }
                            animate={
                                lg
                                    ? {}
                                    : {
                                        translateY: [
                                            "0rem",
                                            "0rem",
                                            "0rem",
                                            "4rem",
                                            "4rem",
                                            "4rem",
                                        ],
                                        opacity: [
                                            1,
                                            1,
                                            1,
                                            1,
                                            0,
                                            0,
                                            0,
                                            0,
                                        ],
                                    }
                            }
                        >

                            <motion.img
                                ref={imgRef}
                                onLoad={handleImgLoad}
                                src="/img/EP-backscreen.png"
                                alt="Image 1"
                                className="tile shadow-tile relative overflow-hidden bg-white w-full rounded-lg"
                            >
                            </motion.img>

                        </motion.div>
                        <motion.div
                            ref={imgRef}
                            transition={
                                !lg
                                    ? {
                                        yoyo: Infinity,
                                        ease: "easeInOut",
                                        duration: 3.5,
                                        delay: 0.5,
                                    }
                                    : {}
                            }
                            style={
                                lg
                                    ? {
                                        position: "absolute",
                                        translateY: tileImgPosition,
                                        opacity: image2Opacity
                                    }
                                    : {
                                        marginTop: [
                                            ...(md
                                                ? [
                                                    `-${height}px`,
                                                ]
                                                : [
                                                    `-${height+25}px`,
                                                ]),
                                        ],
                                    }
                            }
                            animate={
                                lg
                                    ? {}
                                    : {
                                        translateY: [
                                            "4rem",
                                            "4rem",
                                            "4rem",
                                            "0rem",
                                            "0rem",
                                            "0rem",
                                        ],
                                        opacity: [
                                            0,
                                            0,
                                            0,
                                            0,
                                            1,
                                            1,
                                            1,
                                            1,
                                        ],
                                    }
                            }
                        >

                            <motion.img
                                src="/img/EP-frontscreen.png"
                                alt="Image 1"
                                className="tile shadow-tile relative overflow-hidden bg-white w-full rounded-lg"
                            >
                            </motion.img>

                        </motion.div>
                    </div>
                </div>
                <div
                    className="flex flex-col-reverse max-w-lg gap-2 pt-12 pb-8 mx-auto lg:flex-row sm:pt-16 lg:pt-24 short:pt-10 short:pb-4 lg:gap-0 lg:mx-0 lg:max-w-none">
                    <div className="flex flex-col flex-1 gap-2 px-0 -mx-2 lg:flex-row md:px-8 lg:px-12">
                        <Link
                            className="flex flex-1 justify-center items-center appearance-none no-underline font-montserrat font-bold text-xl text-white text-center py-3 px-4 xl:px-4 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:shadow-xl bg-gradient-to-l from-[#1890FF] to-[#47EBF5]"
                            to="/docs/versioned_docs/version-5.x.x/"
                        >
                            部署/运营教程
                        </Link>
                        <Link
                            className="flex items-center justify-center flex-1 gap-3 px-4 py-3 text-xl font-bold text-center text-white no-underline appearance-none font-montserrat md:px-0 xl:px-4 focus:outline-none"
                            href="/docs/"
                        >
                            {/*新版预览 <ChevronRight/>*/}
                        </Link>
                    </div>
                    <div className="flex-1">

                    </div>
                </div>
                {/*<div className="items-center justify-center hidden pb-5 lg:flex short:mt-auto lg:mt-6 short:pb-7">
                    <motion.button
                        className="appearance-none border-none bg-none bg-transparent flex w-auto items-center justify-center gap-2.5"
                        animate={{ translateY: [-10, 10] }}
                        transition={{
                            yoyo: Infinity,
                            ease: "easeInOut",
                            duration: 1.5,
                        }}
                        onClick={() => {
                            if (typeof window !== "undefined") {
                                window.scrollTo({
                                    top: window.innerHeight * 2,
                                    behavior: "smooth",
                                });
                            }
                        }}
                    >
                        <span className="text-xs text-right text-white uppercase font-montserrat w-14">
                            scroll
                        </span>
                        <ScrollIcon className="text-white cursor-pointer" />
                        <span className="text-xs text-left text-white uppercase font-montserrat w-14">
                            down
                        </span>
                    </motion.button>
                </div>*/}
            </motion.div>

            {/* 滚动定位对齐 */}
            <div className="hidden w-screen h-screen max-w-full lg:snap-start lg:block"/>
        </motion.div>
    );
};
