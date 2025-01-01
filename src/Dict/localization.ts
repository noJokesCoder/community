import { localeTypeEnum } from '@/types/CMS';

export const localizationDict = {
    copyTextNotification: {
        [localeTypeEnum.uk]: 'Скопійовано 👌',
        [localeTypeEnum.en]: 'Copied 👌',
    },
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
    menu: {
        meals: {
            lunch: {
                [localeTypeEnum.uk]: 'Обід',
                [localeTypeEnum.en]: 'Lunch',
            },
            dinner: {
                [localeTypeEnum.uk]: 'Вечеря',
                [localeTypeEnum.en]: 'Dinner',
            },
        },
        days: {
            monday: {
                [localeTypeEnum.uk]: 'Понеділок',
                [localeTypeEnum.en]: 'Monday',
            },
            tuesday: {
                [localeTypeEnum.uk]: 'Вівторок',
                [localeTypeEnum.en]: 'Tuesday',
            },
            wednesday: {
                [localeTypeEnum.uk]: 'Середа',
                [localeTypeEnum.en]: 'Wednesday',
            },
            thursday: {
                [localeTypeEnum.uk]: 'Четвер',
                [localeTypeEnum.en]: 'Thursday',
            },
            friday: {
                [localeTypeEnum.uk]: "П'ятниця",
                [localeTypeEnum.en]: 'Friday',
            },
            saturday: {
                [localeTypeEnum.uk]: 'Субота',
                [localeTypeEnum.en]: 'Saturday',
            },
            sunday: {
                [localeTypeEnum.uk]: 'Неділя',
                [localeTypeEnum.en]: 'Sunday',
            },
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
    contactInfo: {
        title: {
            [localeTypeEnum.en]: 'Contact Info',
            [localeTypeEnum.uk]: 'Контактна інформація',
        },
        tabs: {
            address: {
                [localeTypeEnum.en]: 'Address',
                [localeTypeEnum.uk]: 'Адреса',
            },
            copyAddressBtn: {
                [localeTypeEnum.uk]: 'Копіювати адресу',
                [localeTypeEnum.en]: 'Copy address',
            },
            staff: {
                [localeTypeEnum.en]: 'Staff',
                [localeTypeEnum.uk]: 'Персонал',
            },
            email: {
                [localeTypeEnum.en]: 'Email',
                [localeTypeEnum.uk]: 'Пошта',
            },
            phone: {
                [localeTypeEnum.en]: 'Phone number',
                [localeTypeEnum.uk]: 'Номер телефону',
            },
        },
        locationManagerText: {
            [localeTypeEnum.en]: 'Location manager is always available from Monday to Friday',
            [localeTypeEnum.uk]: "Менеджер знаходиться на ресепшені з Понеділка по П'ятницю",
        },
        security: {
            [localeTypeEnum.en]: 'Security officer is available 7 days a week',
            [localeTypeEnum.uk]: 'Охоронець є на ресепшені щодня',
        },
    },
};
