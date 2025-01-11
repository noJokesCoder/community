import React, { useEffect, useRef } from 'react';
import Calendar from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';

import useLocaleState from '@/state/locale.ts';
import { localeTypeEnum } from '@/types/CMS';

// Calendar's CSS
import '@event-calendar/core/index.css';

const CalendarPage: React.FC = () => {
    const { locale } = useLocaleState();
    const ref = useRef<HTMLDivElement>(null);

    const calendarLocale = locale === localeTypeEnum.en ? 'en-US' : 'uk-UA';

    useEffect(() => {
        let calendar: Calendar | null = null;

        if (ref.current) {
            calendar = new Calendar({
                target: ref.current,
                props: {
                    plugins: [TimeGrid],
                    options: {
                        hiddenDays: [0, 6], // 0 is sunday, 6 is saturday
                        dayHeaderFormat: {
                            weekday: 'short',
                            month: 'short',
                            day: '2-digit',
                        },
                        view: 'timeGridWeek',
                        locale: calendarLocale,
                        events: [
                            // your list of events
                        ],
                    },
                },
            });

            return () => {
                if (ref.current && calendar) {
                    calendar.destroy();
                }
            };
        }
    }, [ref.current, calendarLocale]);

    return <div ref={ref} id="calendar"></div>;
};

export default CalendarPage;
