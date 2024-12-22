import { useState, useEffect } from 'react';

type dimensions = { width: number; height: number };

const useWindow = () => {
    const getWindowDimensions = (): dimensions => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState<dimensions>(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { ...windowDimensions, isMobile: windowDimensions.width <= 768 };
};

export default useWindow;
