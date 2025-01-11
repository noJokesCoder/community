import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { loader_homePage } from '@/pages/Home';
import Calendar from '@/pages/Calendar';

const Home = lazy(() => import('@/pages/Home'));
const Template = lazy(() => import('@/pages/template.tsx'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: loader_homePage,
            },
            {
                path: '/calendar',
                element: <Calendar />,
                // todo: add loading of events from CMS!
            },
        ],
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
