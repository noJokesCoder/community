import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// AntD:
import { ConfigProvider, theme } from 'antd';
import en from 'antd/locale/en_US';
import ua from 'antd/locale/uk_UA';
// State:
import useLocaleState from '@/state/locale';

import { localeTypeEnum } from '@/types/CMS';
import './index.scss';

import Router from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                locale={useLocaleState.getState().locale === localeTypeEnum.uk ? ua : en}
                theme={{
                    token: {
                        ...theme.getDesignToken(),
                        colorPrimary: '#0b96d1',
                        colorTextBase: '#191919',
                        colorInfo: '#0b96d1',
                        colorLink: '#0b96d1',
                    },
                }}
            >
                <Router />
            </ConfigProvider>
        </QueryClientProvider>
    </StrictMode>
);
