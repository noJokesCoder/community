import { useEffect, useState } from 'react';

export const useIntersectionObserver = (ref: React.RefObject<Element>) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const intersectionCb = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;

        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCb, {
            root: null,
            rootMargin: '90px',
            threshold: 1.0,
        });
        let watchedNode: Element | null = null;
        if (ref.current) {
            watchedNode = ref.current;
            observer.observe(ref.current);
        }

        return () => {
            if (watchedNode) {
                observer.unobserve(watchedNode);
            }
        };
    }, [ref]);

    return isVisible;
};
