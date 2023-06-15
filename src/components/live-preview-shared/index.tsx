import React from "react";
import { useLivePreviewContext } from "../live-preview-context";

type SharedPreviewProps = {
    children?: string;
};

/**
 * 实时代码组件
 */
const LivePreviewSharedBase = ({
    children,
}: SharedPreviewProps): JSX.Element => {
    const { setShared } = useLivePreviewContext();

    React.useEffect(() => {
        setShared(String(children));

        return () => {
            setShared(undefined);
        };
    }, [children]);

    return null;
};

export const LivePreviewShared = React.memo(
    LivePreviewSharedBase,
    (prev, next) => {
        return String(prev.children) === String(next.children);
    },
);
