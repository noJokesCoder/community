import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';

const TemplatePage: React.FC = () => {
    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    );
};

export default TemplatePage;
