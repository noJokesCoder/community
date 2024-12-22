import React from 'react';
import './index.scss';

import LanguageSwitch from '@/components/LanguageSwitch';

const AppHeader: React.FC = () => {
    return (
        <div className="AppHeader">
            <div className="AppHeader__logo">
                <b>G.S</b>
            </div>
            <div className="AppHeader__menu"></div>
            <div className="AppHeader__lang">
                <LanguageSwitch />
            </div>
        </div>
    );
};

export default AppHeader;
