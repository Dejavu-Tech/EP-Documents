import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


import PropsTable from "@site/src/components/props-table";
import UIConditional from "@site/src/components/ui-conditional";
import PropTag from "@site/src/components/prop-tag";
import Checklist from "@site/src/components/checklist";
import ChecklistItem from "@site/src/components/checklist-item";
import GeneralConceptsLink from "@site/src/components/general-concepts-link";

export default {
    ...MDXComponents,
    Checklist: Checklist,
    ChecklistItem: ChecklistItem,
    UIConditional: UIConditional,
    PropsTable: PropsTable,
    PropTag: PropTag,
    Tabs: Tabs,
    TabItem: TabItem,
    GeneralConceptsLink,
};
