import React, { useMemo } from 'react';
import { Collapse } from 'antd';
import { useLoaderData } from 'react-router-dom';
import { getCmsEntries } from '@/api/fetchFromCMS';
import { contentTypeEnum, localeTypeEnum } from '@/types/CMS';

// Localization:
import { localizationDict } from '@/Dict/localization.ts';

import WeatherWidget from '@/components/WeatherWidget';

import './index.scss';
import useLocaleState from '@/state/locale.ts';

const Home: React.FC = () => {
    let { locale } = useLocaleState();
    const { CMShomePage, CMSkitchenMenu } = useLoaderData();
    const { days, meals } = localizationDict.menu;
    const currentDay = new Date().toLocaleDateString('en', { weekday: 'long' }).toLowerCase();
    const weekDayArr = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
    ] as const;

    const getAccordionClassNames = (key: string) => {
        if (key === currentDay) {
            return { header: 'isCurrentDay' };
        }
        return {
            header:
                weekDayArr.indexOf(key as keyof typeof days) <
                weekDayArr.indexOf(currentDay as keyof typeof days)
                    ? 'isPastDay'
                    : 'isFutureDay',
        };
    };

    if (locale === null) {
        locale = localeTypeEnum.uk;
    }

    const pageTitle: string = CMShomePage.title[locale];
    const heroText: string = CMShomePage.paragraph[locale];

    const menuItems = useMemo(() => {
        if (!CMSkitchenMenu || CMSkitchenMenu.length === 0) {
            return [];
        }
        return Object.keys(CMSkitchenMenu)
            .map(key => {
                if (key !== 'title') {
                    const [lunch, dinner] = CMSkitchenMenu[key][locale].split('|');
                    return {
                        key,
                        label:
                            key === currentDay
                                ? `${days[key as keyof typeof days][locale]} [${new Date().toLocaleDateString('uk')}]`
                                : days[key as keyof typeof days][locale],
                        classNames: getAccordionClassNames(key),
                        children: (
                            <>
                                <p className="kitchen__collapse_text">{`${meals.lunch[locale]}: ${lunch}`}</p>
                                <p className="kitchen__collapse_text">{`${meals.dinner[locale]}: ${dinner}`}</p>
                            </>
                        ),
                    };
                }
            })
            .filter(Boolean);
    }, [locale, CMSkitchenMenu, currentDay]);

    return (
        <div className="home">
            <section className="home_hero">
                <div className="home_title">
                    <h1>{pageTitle}</h1>
                    <p>{heroText}</p>
                </div>
            </section>
            <WeatherWidget />
            <section id="kitchenMenu">
                <h3 className="section-header">{CMSkitchenMenu.title[locale!]}</h3>
                <Collapse
                    size="middle"
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    items={menuItems}
                    defaultActiveKey={currentDay}
                />
            </section>
        </div>
    );
};

export const loader_homePage = async () => {
    const CMShomePage = await getCmsEntries({
        content_type: contentTypeEnum.homePage,
        // select: 'fields.title',
        // locale: localeTypeEnum.uk,
        locale: '*',
    });

    const CMSkitchenMenu = await getCmsEntries({
        content_type: contentTypeEnum.kitchenMenu,
        locale: '*',
    });

    return CMShomePage && CMSkitchenMenu
        ? {
              CMShomePage: CMShomePage[0].fields,
              CMSkitchenMenu: CMSkitchenMenu[0].fields,
          }
        : undefined;
};

export default Home;
