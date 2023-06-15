import React from "react";
import { useLivePreviewContext } from "../live-preview-context";

type SharedPreviewProps = {
    children?: string;
};

/**
 * 实时代码组件
 */
const LivePreviewSharedCssBase = ({
    children,
}: SharedPreviewProps): JSX.Element => {
    const { setSharedCss } = useLivePreviewContext();

    React.useEffect(() => {
        setSharedCss(String(children));

        return () => {
            setSharedCss(undefined);
        };
    }, [children]);

    return null;
};

export const LivePreviewSharedCss = React.memo(
    LivePreviewSharedCssBase,
    (prev, next) => {
        return String(prev.children) === String(next.children);
    },
);
