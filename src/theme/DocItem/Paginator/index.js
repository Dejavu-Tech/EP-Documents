import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocPaginator from "@theme/DocPaginator";

import { useCurrentTutorial } from "../../../hooks/use-current-tutorial";


export default function DocItemPaginator() {
    const { metadata } = useDoc();
    const tutorialData = useCurrentTutorial();

    const isTutorial = !!tutorialData;

    const previous = isTutorial
        ? tutorialData.pagination.previous
        : metadata.previous;
    const next = isTutorial ? tutorialData.pagination.next : metadata.next;

    return <DocPaginator previous={previous} next={next} />;
}
