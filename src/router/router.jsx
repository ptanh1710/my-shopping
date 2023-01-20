import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout, GuestLayout } from '../components/Layouts';
import {
    Home,
    Cart,
    Detail,
    SignIn,
    SignOut,
    SignUp,
    NotFound,
    Contact,
} from '../views';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/detail/:id',
                element: <Detail />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <SignIn />,
            },
            {
                path: '/logout',
                element: <SignOut />,
            },
            {
                path: '/register',
                element: <SignUp />,
            },
        ],
    },

    {
        path: '*',
        element: <NotFound />,
    },
]);
