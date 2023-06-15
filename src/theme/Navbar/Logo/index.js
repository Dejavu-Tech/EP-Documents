import React from "react";
import Link from "@docusaurus/Link";

import { EPIcon } from "../../../components/landing/icons/ep-icon";

export default function NavbarLogo({ className, ...props }) {
    return (
        <Link to="/" className="mx-auto lg:mx-0">
            <EPIcon
                onContextMenu={(event) => {
                    event.preventDefault();
                    window
                        .open(
                            "https://www.rexotech.cn",
                            "_blank",
                        )
                        .focus();
                }}
                className={
                    className
                        ? className
                        : "select-none mx-auto pr-6 lg:ml-0 lg:mr-2 lg:pr-0 items-center flex min-w-[110px] max-w-[150px]"
                }
                // imageClassName="navbar__logo"
                // titleClassName="navbar__title text--truncate"
                {...props}
            />
        </Link>
    );
}
