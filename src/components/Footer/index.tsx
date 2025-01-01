import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="footer__wrap">
            <p>
                Designed & created by{' '}
                <Link to="https://github.com/noJokesCoder">
                    <b> noJokesCoder</b>
                </Link>
                {' 🇺🇦 '}
            </p>
        </div>
    </footer>
);

export default Footer;
