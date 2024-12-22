import { useState, useCallback } from 'react';

const useLocalStorage = ({ key, defaultValue }: { key: string; defaultValue: unknown }) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);

            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            window.localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    });

    const setLocalStorageStateValue = useCallback(
        (valueOrFn: any) => {
            let newValue =
                typeof valueOrFn === 'function' ? valueOrFn(localStorageValue) : valueOrFn;

            window.localStorage.setItem(key, JSON.stringify(newValue));
            setLocalStorageValue(newValue);
        },
        [key, localStorageValue]
    );

    return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
