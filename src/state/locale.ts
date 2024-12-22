import { create } from 'zustand';
import { localeTypeEnum } from '@/types/CMS';

type localeStateType = {
    locale: localeTypeEnum | null;
    setLocale: (locale: localeTypeEnum) => void;
};

const useLocaleState = create<localeStateType>(set => ({
    locale: null,
    setLocale: (locale: localeTypeEnum) => set({ locale }),
}));

export default useLocaleState;
