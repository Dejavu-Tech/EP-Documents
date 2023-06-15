import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal";
// import Translate from "@docusaurus/Translate";
import { ChevronLeft } from "../../../../components/blog/icons";
// import CustomVersionDropdown from "../../../../components/custom-version-dropdown";
function SecondaryMenuBackButton(props) {
    return (
        <button
            {...props}
            type="button"
            className="clean-btn navbar-sidebar__back pl-0 mb-4 ml-2.5 w-[calc(100%-20px)] flex items-center border-y border-y-[#9696B4] border-solid border-x-0"
        >
            <ChevronLeft className="w-7 h-7" /> 返回
        </button>
    );
}
// 副菜单从右侧滑动并显示上下文
export default function NavbarMobileSidebarSecondaryMenu() {
    const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
    const secondaryMenu = useNavbarSecondaryMenu();
    return (
        <>
            {/* 防止在主菜单为空时返回主菜单 */}
            {/*{!isPrimaryMenuEmpty && (
                <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
            )}*/}
            {/* <div className="ml-2.5 w-[calc(100%-20px)] mb-4 pb-4 py-2 border-b border-b-[#9696B4] border-solid border-x-0 border-t-0 flex items-center justify-between">
                <div className="flex-shrink-0 font-montserrat font-bold text-[#2A2A42] text-[15px] leading-[15px] w-[120px]">
                    Version
                </div>
                <div className="flex-1">
                    <CustomVersionDropdown />
                </div>
            </div> */}
            {secondaryMenu.content}
        </>
    );
}
