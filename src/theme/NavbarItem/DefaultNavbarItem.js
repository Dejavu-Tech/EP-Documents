import React from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import { getLinkRel } from "@site/src/utils/link-rel";

function DefaultNavbarItemDesktop({
    className,
    isDropdownItem = false,
    ...props
}) {
    const rel = getLinkRel(props?.href);
    const element = (
        <NavbarNavLink
            className={clsx(
                isDropdownItem ? "dropdown__link" : "navbar__item",
                className,
            )}
            isDropdownLink={isDropdownItem}
            {...props}
            rel={rel}
        />
    );
    if (isDropdownItem) {
        return <li>{element}</li>;
    }
    return element;
}
function DefaultNavbarItemMobile({ className, isDropdownItem, ...props }) {
    return (
        <li className="menu__list-item">
            <NavbarNavLink
                className={clsx("menu__link", className)}
                {...props}
            />
        </li>
    );
}
export default function DefaultNavbarItem({
    mobile = false,
    position, // 需要从props中单独解构position，以免传递
    ...props
}) {
    const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
    return (
        <Comp
            {...props}
            activeClassName={
                props.activeClassName ??
                (mobile ? "menu__link--active" : "navbar__link--active")
            }
        />
    );
}
