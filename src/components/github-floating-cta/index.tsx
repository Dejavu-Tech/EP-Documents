import React, { FC, memo, useMemo, useState } from "react";
import { useGithubContext } from "../../context/GithubContext";
import { GithubIcon, CancelIcon } from "../landing/icons";

const GithubFloatingCta: FC = () => {
    const [isClosed, setIsClosed] = useState(
        localStorage.getItem("github-float-cta") === "true",
    );

    const { starCount, loading } = useGithubContext();

    const handleClose = () => {
        localStorage.setItem("github-float-cta", "true");
        setIsClosed(true);
    };

    const formattedStarCount = useMemo(() => {
        if (loading || !starCount) return "";

        return new Intl.NumberFormat().format(starCount);
    }, [starCount, loading]);

    if (isClosed) return null;

    return (
        <div className="font-montserrat shadow-githubFloatingCta fixed bottom-0 mx-auto flex h-[48px] w-full items-center bg-[#2A2A42] px-3 text-xs font-bold text-white left-0 right-0 sm:bottom-[32px] sm:w-[300px] sm:rounded-3xl z-[999]">

            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
                className="flex items-center gap-2 mx-auto text--no-decoration text-inherit"
                href="https://github.com/Dejavu-Tech/"
                target="_blank"
            >

                <GithubIcon />
                <div className="ml-2">如果喜欢，请点星支持</div>
                <div className=" flex min-h-[25px] min-w-[40px] items-center justify-center rounded-md bg-white p-[1px] text-[#2A2A42]">
                    <span>{formattedStarCount}</span>
                </div>
                <span>⭐</span>
            </a>

            <button
                className="flex cursor-pointer items-center justify-center border-none bg-transparent text-[#9797A2] hover:scale-125"
                onClick={handleClose}
            >
                <CancelIcon />
            </button>
        </div>
    );
};

export default memo(GithubFloatingCta);
