import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
    // 将初始状态函数传递给 useState，逻辑只执行一次
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // 通过key从本地存储获取
            const item =
                typeof window !== "undefined"
                    ? window.localStorage.getItem(key)
                    : undefined;
            // 解析json，如果没有则返回初始值
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // 如果错误也返回初始值
            console.log(error);
            return initialValue;
        }
    });
    // 返回 useState 包装后 setter ，将新值保存到本地存储
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // 与useState相同，允许值是一个函数
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // 保存至 state
            setStoredValue(valueToStore);
            // 保存至本地存储
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // 暂时打印错误，后续更新 catch
            console.log(error);
        }
    };
    return [storedValue, setValue] as const;
};

export default useLocalStorage;
