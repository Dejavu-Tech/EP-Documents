import React from "react";

export const useInView = (
    ref: React.RefObject<HTMLElement>,
    rootMargin = "0px",
): boolean => {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        const curr = ref?.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // 回调触发时更新状态
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            },
        );
        if (curr) {
            observer.observe(curr);
        }
        return () => {
            if (curr) {
                observer.unobserve(curr);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isIntersecting;
};
