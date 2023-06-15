import React from "react";
import ReactMarkdown from "react-markdown";
import Admonition from "@theme/Admonition";

const md = `Eater Planet的所有与数据相关的钩子（useTable、useForm、useList等）都可以被赋予一些共同的属性，如\`resource\`、\`meta\`等`;

const GeneralConceptsLink = () => {
    return (
        <div>
            <Admonition type="tip">
                <ReactMarkdown>{md}</ReactMarkdown>
            </Admonition>
        </div>
    );
};

export default GeneralConceptsLink;
