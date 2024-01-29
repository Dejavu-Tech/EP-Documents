import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import { useReward } from "react-rewards";

const LoveIcon = (props) => (
    <svg
        width={20}
        height={18}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.435 1.464a5 5 0 0 0-7.071 0L9.95 2.88 8.536 1.465a5 5 0 1 0-7.072 7.07l8.486 8.486 7.07-7.071 1.415-1.414a5 5 0 0 0 0-7.072Z"
            fill="#FF1818"
        />
    </svg>
);

const QQIcon = (props) => (
    <svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="#9696B4"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.01,13.782c-.46-1.413-.99-2.6-1.8-4.545C18.333,4.13,16.113,0,11,0c-5.172,0-7.343,4.213-7.2,9.237-.817,1.947-1.343,3.126-1.8,4.545-.978,3.011-.662,4.257-.42,4.285.517.06,2.016-2.266,2.016-2.266a5.911,5.911,0,0,0,2.295,4.372c-.759.223-2.465.822-2.059,1.479.328.531,5.643.339,7.176.174,1.533.165,6.848.357,7.176-.174.4-.654-1.3-1.256-2.06-1.479a5.918,5.918,0,0,0,2.3-4.372s1.5,2.326,2.016,2.266C20.671,18.036,20.988,16.791,20.01,13.782Z"
        />
    </svg>
);

const GithubIcon = (props) => (
    <svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="#9696B4"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.053 0A10.904 10.904 0 0 0 3.89 2.685 11.34 11.34 0 0 0 .142 9.472a11.48 11.48 0 0 0 1.456 7.65 11.087 11.087 0 0 0 5.964 4.86c.556.103.752-.25.752-.547v-1.918C5.23 20.202 4.58 18 4.58 18a3.012 3.012 0 0 0-1.227-1.655c-.997-.692.081-.692.081-.692.35.05.683.18.975.382.293.202.536.469.713.78.15.278.352.523.595.721a2.312 2.312 0 0 0 2.618.221c.042-.57.283-1.105.678-1.509-2.454-.284-5.03-1.253-5.03-5.539a4.415 4.415 0 0 1 1.132-3.025A4.194 4.194 0 0 1 5.224 4.7s.928-.305 3.036 1.156c1.81-.508 3.72-.508 5.531 0 2.108-1.46 3.03-1.156 3.03-1.156.406.936.455 1.993.135 2.963a4.415 4.415 0 0 1 1.132 3.026c0 4.334-2.582 5.282-5.043 5.538.264.271.468.597.598.955.13.358.182.741.155 1.122V21.4c0 .367.196.65.759.54a11.093 11.093 0 0 0 5.88-4.878 11.481 11.481 0 0 0 1.419-7.6 11.34 11.34 0 0 0-3.71-6.746A10.907 10.907 0 0 0 11.053 0Z"
        />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg
        width={19}
        height={19}
        viewBox="0 0 19 19"
        fill="#9696B4"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M18 0H.75A.75.75 0 0 0 0 .75V18c0 .415.335.75.75.75H18a.75.75 0 0 0 .75-.75V.75A.75.75 0 0 0 18 0ZM5.562 15.977H2.78V7.03h2.782v8.948ZM4.172 5.805a1.612 1.612 0 1 1 0-3.224 1.612 1.612 0 0 1 0 3.224Zm11.805 10.172h-2.78v-4.352c0-1.038-.018-2.372-1.445-2.372-1.447 0-1.67 1.13-1.67 2.297v4.427H7.306V7.03h2.668v1.223h.037c.37-.703 1.277-1.446 2.632-1.446 2.817 0 3.335 1.854 3.335 4.263v4.908Z" />
    </svg>
);

const WeComIcon = (props) => (
    <svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="#9696B4"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.767,16.34a3.336,3.336,0,0,0-1.155.468,2.8,2.8,0,0,1-1.262.762,1.868,1.868,0,0,1,.6-1.114,4.166,4.166,0,0,0,.575-1.351,1.238,1.238,0,1,1,1.242,1.235ZM18.5,13.377a4.147,4.147,0,0,0-1.346-.582A1.238,1.238,0,1,1,18.4,11.558a3.368,3.368,0,0,0,.462,1.159,2.818,2.818,0,0,1,.755,1.267,1.87,1.87,0,0,1-1.106-.607h0ZM16.464,9.015C16.091,5.89,12.855,3.441,8.94,3.441c-4.171,0-7.565,2.776-7.565,6.19a5.786,5.786,0,0,0,2.7,4.7,7.564,7.564,0,0,0,.825.53L4.567,16.2c.121.057.238.118.362.17l1.694-.847c.248.064.508.105.767.149.165.03.33.06.5.08a8.7,8.7,0,0,0,3.163-.182,6.091,6.091,0,0,0,.249,1.352A10.484,10.484,0,0,1,8.94,17.2a10.3,10.3,0,0,1-2.122-.234L3.745,18.5a.675.675,0,0,1-.736-.077.687.687,0,0,1-.238-.7l.55-2.214A7.173,7.173,0,0,1,0,9.631C0,5.453,4,2.066,8.94,2.066c4.688,0,8.527,3.057,8.9,6.942a5.887,5.887,0,0,0-.65-.065,6.126,6.126,0,0,0-.727.071Zm-2.856,4.879a3.331,3.331,0,0,0,1.156-.467,2.8,2.8,0,0,1,1.263-.761,1.876,1.876,0,0,1-.6,1.113,4.173,4.173,0,0,0-.574,1.351,1.238,1.238,0,1,1-1.243-1.236Zm2.23,2.978a4.149,4.149,0,0,0,1.342.587A1.238,1.238,0,1,1,15.942,18.7a3.33,3.33,0,0,0-.458-1.16,2.821,2.821,0,0,1-.75-1.272,1.87,1.87,0,0,1,1.1.615Z"
        />
    </svg>
);

export default function FooterLayout({
    style,
    links,
    logo,
    copyright,
    legalLinks,
    socialLinks,
}) {
    const { pathname } = useLocation();
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { footerDescription } = customFields;
    const { reward: leftReward, isAnimating: leftIsAnimating } = useReward(
        "leftReward",
        "emoji",
        {
            emoji: ["🔥", "⭐", "❤️"],
            angle: 45,
            elementCount: 80,
            startVelocity: 45,
            decay: 0.95,
            lifetime: 150,
        },
    );
    const { reward: rightReward, isAnimating: rightIsAnimating } = useReward(
        "rightReward",
        "emoji",
        {
            emoji: ["💙", "💜", "🧡", "💖"],
            angle: 135,
            elementCount: 80,
            startVelocity: 45,
            decay: 0.95,
            lifetime: 150,
        },
    );

    return (
        <footer
            className={`ep-footer ${
                pathname === "/" ? "ep-footer-index" : ""
            } px-4 pb-24 pt-7 md:px-6 lg:pt-10 lg:pb-24`}
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-5">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-20">
                    {logo && (
                        <div className="w-full max-w-full flex-shrink-0 lg:max-w-[300px]">
                            {logo}
                        </div>
                    )}

                    {/*<a
                        href="https://www.producthunt.com/posts/eaterplanet-3?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-eaterplanet&#0045;3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=362220&theme=neutral&period=daily"
                            alt="eaterplanet - 100&#0037;&#0032;open&#0032;source&#0032;React&#0032;framework&#0032;to&#0032;build&#0032;web&#0032;apps&#0032;3x&#0032;faster | Product Hunt"
                            style={{ width: "166px", height: "35px" }}
                            width="250"
                            height="54"
                        />
                    </a>*/}

                    {/*<a
                        href="https://github.com/sponsors/eaterplanet"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <iframe
                            src="https://github.com/sponsors/eaterplanet/button"
                            title="eaterplanet"
                            height="32"
                            width="114"
                            style={{
                                border: 0,
                                borderRadius: "6px",
                            }}
                        ></iframe>
                    </a>*/}
                </div>
                {/*<div className="flex flex-col gap-6 lg:flex-row lg:gap-40">
                    <div
                        className="w-full max-w-full flex-shrink-0 text-xs tracking-wide text-[#9696B4] lg:max-w-[300px]"
                        dangerouslySetInnerHTML={{ __html: footerDescription }}
                    />
                    <div className="flex-1">{links}</div>
                </div>*/}
                <div className="h-2.5 w-full border-0 border-b-2 border-solid border-b-[#9696B4]" />
                <div className="flex flex-1 flex-col-reverse gap-6 lg:flex-row lg:gap-0">
                    <div className="flex items-center justify-center text-[11px] leading-[12px] text-[#9696B4] sm:text-xs lg:justify-start">
                        © {new Date().getFullYear()} EP-Project Team of Dejavu Tech.{" "}
                        <LoveIcon
                            className="mx-2"
                            onClick={() => {
                                leftReward();
                                rightReward();
                            }}
                        />
                        {" "}
                        <a
                            href="https://beian.miit.gov.cn/"
                            className="text-[#9696B4]"
                        >
                            滇 ICP 备 19006701 号 - 7
                        </a>
                    </div>
                    <div className="flex h-[18px] flex-[2] items-center justify-center gap-4 text-xs text-[#9696B4] sm:justify-start lg:justify-end">
                        {legalLinks?.items?.map?.((item, i) => (
                            <a
                                key={i}
                                href={item.to}
                                className="text-[#9696B4]"
                              >
                                  {item.label}
                              </a>
                            ))}
                        </div>

                    <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:gap-0">

                        <div className="flex h-[18px] flex-[3] items-center justify-center gap-3 text-xs text-[#9696B4] sm:justify-end">
                            <span>联系我们</span>
                            {socialLinks?.items?.map?.((socialLink, i) => (
                                <a
                                    key={i}
                                    className="h-[22px] w-[22px]"
                                    href={socialLink.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {socialLink.label === "github" && (
                                        <GithubIcon className="h-[22px] w-[22px] transition-colors duration-500 ease-in-out hover:fill-[#171515]" />
                                    )}
                                    {socialLink.label === "QQ" && (
                                        <QQIcon className="h-[22px] w-[22px] transition-colors duration-500 ease-in-out hover:fill-[#1DA1F2]" />
                                    )}
                                    {socialLink.label === "WeCom" && (
                                        <WeComIcon className="h-[22px] w-[22px] transition-colors duration-500 ease-in-out hover:fill-[#1DA1F2]" />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span
                className="fixed -left-10 bottom-[20vh] z-10 "
                id="leftReward"
            />
            <span
                className="fixed -right-10 bottom-[20vh] z-10 "
                id="rightReward"
            />
        </footer>
    );
}
