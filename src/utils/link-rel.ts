import isInternalUrl from "@docusaurus/isInternalUrl";
/**
 * @param {string} URL 作为链接生成 rel 属性
 */
export const getLinkRel = (URL?: string): string => {
    let rel = "noopener noreferrer nofollow";

    const isInternalURL = isInternalUrl(URL);

    if (URL?.includes("github.com/Dejavu-Tech/EP-Documents")) {
        rel = "noopener";
    }

    if (isInternalURL || URL?.includes("e-p.io")) {
        rel = "noopener dofollow";
    }

    return rel;
};
