type SplitReturn = {
    visible: string;
    join: (code: string) => string;
};

/**
 * @param {string} code 使用 visible-block-start 和 visible-block-end 拆分注释{string}代码，并返回
 */
export const splitCode = (code?: string): SplitReturn => {
    const beginningComment = "// visible-block-start";
    const endingComment = "// visible-block-end";

    let beginning = code.indexOf(beginningComment);
    beginning = beginning > 0 ? beginning + beginningComment.length : 0;

    let ending = code.indexOf(endingComment);
    ending = ending > 0 ? ending : code.length;

    const aboveHidden = code.slice(0, beginning);
    const visible = code.slice(beginning, ending).trimEnd().trimStart();
    const belowHidden = code.slice(ending);

    return {
        visible,
        join: (code: string) => `${aboveHidden}\n${code}\n${belowHidden}`,
    };
};
