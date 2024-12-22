import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCmsEntries } from '@/api/fetchFromCMS';
import { contentTypeEnum, localeTypeEnum } from '@/types/CMS';

import WeatherWidget from '@/components/WeatherWidget';

import './index.scss';
import useLocaleState from '@/state/locale.ts';

const Home: React.FC = () => {
    let { locale } = useLocaleState();
    const CMSData = useLoaderData();

    if (locale === null) {
        locale = localeTypeEnum.uk;
    }

    console.log('DATA', CMSData);
    console.log('locale', locale);

    const pageTitle: string = CMSData.title[locale];
    const heroText: string = CMSData.paragraph[locale];

    return (
        <>
            <section className="home_hero">
                <div className="home_title">
                    <h1>{pageTitle}</h1>
                    <p>{heroText}</p>
                </div>
            </section>
            <WeatherWidget />
        </>
    );
};

export const loader_homePage = async () => {
    const CMSData = await getCmsEntries({
        content_type: contentTypeEnum.homePage,
        // select: 'fields.title',
        // locale: localeTypeEnum.uk,
        locale: '*',
    });

    return CMSData?.length ? CMSData[0].fields : undefined;
};

export default Home;
