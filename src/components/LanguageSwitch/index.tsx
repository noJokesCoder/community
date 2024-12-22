import React, { useCallback, useEffect } from 'react';
import { Radio, message } from 'antd';

import { localeTypeEnum } from '@/types/CMS';
import useLocalStorage from '@/hooks/useLocalStorage';
import useLocaleState from '@/state/locale';
import { localizationDict } from '@/Dict/localization.ts';

import './index.scss';

const LanguageSwitch: React.FC = () => {
    const { locale, setLocale } = useLocaleState();

    const [lang, setLang] = useLocalStorage({
        key: 'language',
        defaultValue: localeTypeEnum.uk,
    });

    useEffect(() => {
        if (!locale || (lang && lang !== locale)) {
            setLocale(lang);
        }
    }, []);

    const options = [
        { value: localeTypeEnum.en, label: <span className="lang-flag">🇺🇸</span> },
        { value: localeTypeEnum.uk, label: <span className="lang-flag">🇺🇦</span> },
    ];

    const onChangeLanguage = useCallback(
        (e: { target: { value: localeTypeEnum } }) => {
            setLang(e.target.value);
            setLocale(e.target.value);
            message.info(localizationDict.langSwitch.notification[e.target.value]);
        },
        [locale]
    );
    const { label } = localizationDict.langSwitch;

    return (
        <div className="LanguageSwitch">
            <span className="LanguageSwitch__label">{label[locale!]}</span>
            <Radio.Group
                block
                value={lang}
                options={options}
                defaultValue="Apple"
                optionType="button"
                buttonStyle="solid"
                // @ts-ignore
                onChange={onChangeLanguage}
            />
        </div>
    );
};

export default LanguageSwitch;
