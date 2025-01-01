import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';

const TemplatePage: React.FC = () => {
    return (
        <>
            <AppHeader />
            <Outlet />
            <Footer />
        </>
    );
};

export default TemplatePage;
