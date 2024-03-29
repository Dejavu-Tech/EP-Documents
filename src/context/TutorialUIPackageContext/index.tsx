import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";

export type PreferredUIPackage =
    | "headless"
    | "antd"
    | "chakra-ui"
    | "mantine"
    | "mui";

export const availableUIPackages = [
    "headless",
    "antd",
    "chakra-ui",
    "mantine",
    "mui",
] as const;

const validate = (value?: string | undefined) => {
    if (availableUIPackages.includes(value as any)) {
        return value;
    }
    return undefined;
};

const getDedicatedFromId = (id: string) => {
    // 检查容器 ID 是否包含 <availableUIPackage>
    const match = id.match(/\/(headless|antd|chakra-ui|mantine|mui)\//);
    if (match && validate(match[1])) {
        return match[1] as PreferredUIPackage;
    }
    return undefined;
};

const LOCALSTORAGE_KEY = "tutorial-preferred-ui-package";

export const TutorialUIPackageContext = React.createContext<{
    preferred: PreferredUIPackage;
    setPreferred: (val: PreferredUIPackage) => void;
    current: PreferredUIPackage | undefined;
}>({
    preferred: "headless",
    current: undefined,
    setPreferred: () => undefined,
});

export const TutorialUIPackageProvider: React.FC<
    React.PropsWithChildren<{}>
> = ({ children }) => {
    const { metadata } = useDoc();

    const dedicated = getDedicatedFromId(metadata.id);

    const [preferred, _setPreferred] =
        React.useState<PreferredUIPackage>("headless");

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const rawValue = localStorage.getItem(LOCALSTORAGE_KEY);
            const validatedValue = validate(rawValue);
            if (validatedValue) {
                _setPreferred(validatedValue as PreferredUIPackage);
            }
        }
    }, []);

    const setPreferred = (val: PreferredUIPackage) => {
        if (!validate(val)) {
            return undefined;
        }

        if (typeof window !== "undefined") {
            localStorage.setItem(LOCALSTORAGE_KEY, val);
        }

        _setPreferred(val);
    };

    React.useEffect(() => {
        if (dedicated && dedicated !== preferred) {
            setPreferred(dedicated);
        }
    }, [dedicated, preferred]);

    return (
        <TutorialUIPackageContext.Provider
            value={{
                preferred,
                setPreferred,
                current: dedicated || preferred,
            }}
        >
            {children}
        </TutorialUIPackageContext.Provider>
    );
};
