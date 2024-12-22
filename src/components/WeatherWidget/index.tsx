import React, { useEffect, useState } from 'react';
import config from '@/config';
import { Button, Modal } from 'antd';
import useWindow from '@/hooks/useWindow';
// State:
import useLocaleState from '@/state/locale.ts';
import useWeatherState from '@/state/weather.ts';
// Localization:
import { localizationDict } from '@/Dict/localization.ts';

import './index.scss';
import { localeTypeEnum } from '@/types/CMS';

const WeatherWidget: React.FC = () => {
    const { weather, setWeather } = useWeatherState();
    const { locale } = useLocaleState();
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useWindow();

    const { table, button, title, paragraph } = localizationDict.weatherWidget;

    useEffect(() => {
        if (locale) {
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Wapenveld,nl&lang=${locale}&units=metric&APPID=${config.PUBLIC_WEATHER_API_KEY}`;

            (async (): Promise<void> => {
                let data;
                try {
                    const res = await fetch(weatherApiUrl);
                    data = await res.json();

                    setWeather(data);
                } catch (error) {
                    console.error('failed to load weather:', error);
                }
            })();
        }
    }, [locale]);

    const openChangeHandler = () => {
        setIsOpen(state => !state);
    };

    return weather ? (
        <section id="weather" className="WeatherWidget">
            <h4 className="WeatherWidget__header">{title[locale!]}</h4>
            <div className="WeatherWidget__desc">
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                />
                <h5>
                    <span>{weather.weather[0].description}</span>
                    <br />
                    <span>{`${paragraph[locale!]} ${Math.round(weather.main.temp)}℃`}</span>
                    <br />
                    <span>{`${table.feels_like[locale!]} ${Math.round(weather.main.feels_like)}℃`}</span>
                </h5>
                {isMobile ? (
                    <Button
                        className="WeatherWidget__button"
                        onClick={openChangeHandler}
                        type="primary"
                    >
                        {button[locale!]}
                    </Button>
                ) : (
                    <>
                        <hr />
                        <p>
                            <span>{`${table.temp_min[locale!]} ${Math.round(weather.main.temp_min) + ' ℃'}`}</span>
                            <br />
                            <span>{`${table.temp_max[locale!]} ${Math.round(weather.main.temp_max) + ' ℃'}`}</span>
                            <br />
                            <span>{`${table.humidity[locale!]} ${Math.round(weather.main.humidity)}%`}</span>
                        </p>
                        <hr />
                        <p>
                            <span>{`${table.pressure[locale!]} ${Math.round(weather.main.pressure)}`}</span>
                            <br />
                            <span>{`${table.wind[locale!]} ${weather.wind.speed}  ${locale === localeTypeEnum.en ? 'm/s' : 'м/сек'}`}</span>
                            <br />
                            <span>{`${table.visibility[locale!]} ${Math.round(weather.visibility / 1000)} ${locale === localeTypeEnum.en ? 'km' : 'км'}`}</span>
                        </p>
                    </>
                )}
            </div>
            <Modal
                open={isOpen}
                footer={null}
                onCancel={() => setIsOpen(false)}
                title={title[locale!]}
            >
                <table className="weather__table">
                    <tbody>
                        <tr>
                            <td>{paragraph[locale!]}</td>
                            <td className="align-right">{Math.round(weather.main.temp) + ' ℃'}</td>
                        </tr>
                        <tr>
                            <td>{table.temp_min[locale!]}</td>
                            <td className="align-right">
                                {Math.round(weather.main.temp_min) + ' ℃'}
                            </td>
                        </tr>
                        <tr>
                            <td>{table.temp_max[locale!]}</td>
                            <td className="align-right">
                                {Math.round(weather.main.temp_max) + ' ℃'}
                            </td>
                        </tr>
                        <tr>
                            <td>{table.feels_like[locale!]}</td>
                            <td className="align-right">
                                {Math.round(weather.main.feels_like) + ' ℃'}
                            </td>
                        </tr>
                        <tr>
                            <td>{table.humidity[locale!]}</td>
                            <td className="align-right">{`${weather.main.humidity}%`}</td>
                        </tr>
                        <tr>
                            <td>{table.pressure[locale!]}</td>
                            <td className="align-right">{`${weather.main?.pressure}`}</td>
                        </tr>
                        <tr>
                            <td>{table.visibility[locale!]}</td>
                            <td className="align-right">{`${Math.round(weather.visibility / 1000)} км`}</td>
                        </tr>
                        <tr>
                            <td>{table.wind[locale!]}</td>
                            <td className="align-right">{`${weather.wind.speed} м/сек`}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal>
        </section>
    ) : null;
};

export default WeatherWidget;
