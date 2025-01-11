import React from 'react';
import Layout from 'layout/layout';
import { login, searchLoginId } from 'appConstants/routePaths'
import LazyLoadWrapper from 'utilities/lazyLoadWrapper';
import UnAuthGuard from 'utilities/guards/UnAuthGuard';

const Login = React.lazy(
    () => import(
        'pages/Login'
    ),
);

const LoginIdSearch = React.lazy(
    () => import(
        'pages/LoginIdSearch'
    ),
);

const publicRoutes = {
    path: '/',
    element: (
        <UnAuthGuard>
            <Layout />
        </UnAuthGuard>
    ),
    children: [
        {
            path: login,
            element: (
                <LazyLoadWrapper>
                    <Login />
                </LazyLoadWrapper>
            ),
        },
        {
            path: searchLoginId,
            element: (
                <LazyLoadWrapper>
                    <LoginIdSearch />
                </LazyLoadWrapper>
            ),
        },
    ],
};

export default publicRoutes;
