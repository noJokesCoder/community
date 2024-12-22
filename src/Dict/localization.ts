import { localeTypeEnum } from '@/types/CMS';

export const localizationDict = {
    langSwitch: {
        notification: {
            [localeTypeEnum.uk]: 'Мова сайту - Українська',
            [localeTypeEnum.en]: 'English is set as a website language',
        },
        label: {
            [localeTypeEnum.uk]: 'Мова:',
            [localeTypeEnum.en]: 'Lang.:',
        },
    },
    weatherWidget: {
        title: {
            [localeTypeEnum.uk]: 'Погода в Вапенвельді',
            [localeTypeEnum.en]: 'Weather in Wapenveld',
        },
        paragraph: {
            [localeTypeEnum.uk]: 'Температура повітря:',
            [localeTypeEnum.en]: 'Temperature:',
        },
        button: {
            [localeTypeEnum.uk]: 'Дізнатись більше',
            [localeTypeEnum.en]: 'Learn more',
        },
        modalTitle: {
            [localeTypeEnum.uk]: 'Погода сьогодні',
            [localeTypeEnum.en]: "Today's weather",
        },
        table: {
            feels_like: {
                [localeTypeEnum.uk]: 'Відчувається як:',
                [localeTypeEnum.en]: 'Feels like:',
            },
            humidity: {
                [localeTypeEnum.uk]: 'Вологість повітря:',
                [localeTypeEnum.en]: 'Humidity:',
            },
            pressure: {
                [localeTypeEnum.uk]: 'Атмосферний тиск:',
                [localeTypeEnum.en]: 'Pressure:',
            },
            visibility: {
                [localeTypeEnum.uk]: 'Видимість:',
                [localeTypeEnum.en]: 'Visibility:',
            },
            wind: {
                [localeTypeEnum.uk]: 'Швидкість вітру:',
                [localeTypeEnum.en]: 'Wind speed:',
            },
            temp_min: {
                [localeTypeEnum.uk]: 'Мінімальна темп. протягом дня:',
                [localeTypeEnum.en]: 'Minimum temperature',
            },
            temp_max: {
                [localeTypeEnum.uk]: 'Максимальна темп. протягом дня:',
                [localeTypeEnum.en]: 'Maximum temperature',
            },
        },
    },
};
