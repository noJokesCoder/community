import * as contentful from 'contentful';
import { type localeTypeEnum, type contentTypeEnum } from '@/types/CMS';

import config from '@/config';

console.log('ENV', config);

const CMS = contentful.createClient({
    space: config.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});

export const getCmsEntries = async ({
    locale,
    content_type,
}: {
    locale: localeTypeEnum | '*';
    content_type: contentTypeEnum;
}) => {
    try {
        const response =
            locale === '*'
                ? await CMS.withAllLocales.getEntries({ content_type })
                : await CMS.getEntries({ locale, content_type });

        return response.items;
    } catch (error) {
        console.error('Failed to get entries from CMS:', error);
    }
};

export const getCmsEntryById = async ({
    entry,
    locale,
}: {
    locale: localeTypeEnum | '*';
    entry: string;
}) => {
    try {
        const data =
            locale === '*'
                ? await CMS.withAllLocales.getEntry(entry)
                : await CMS.getEntry(entry, { locale });

        return data;
    } catch (error) {
        console.error('Failed to  load entry by id: ', error);
    }
};
