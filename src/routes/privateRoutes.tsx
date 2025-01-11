import React from 'react';
import { dashboard, timesheet, timeOff } from 'appConstants/routePaths'
import LazyLoadWrapper from 'utilities/lazyLoadWrapper';
import UnAuthGuard from 'utilities/guards/UnAuthGuard';
import MainLayout from '../layout/MainLayout';

const Dashboard = React.lazy(
    () => import(
        'pages/Dashboard'
    ),
);

const Timesheet = React.lazy(
    () => import(
        'pages/Timesheet'
    ),
);

const TimeOff = React.lazy(
    () => import(
        'pages/TimeOff'
    ),
);

const privateRoutes = {
    path: '/',
    element: (
        <UnAuthGuard>
            <MainLayout />
        </UnAuthGuard>
    ),
    children: [
        {
            path: dashboard,
            element: (
                <LazyLoadWrapper>
                    <Dashboard />
                </LazyLoadWrapper>
            ),
        },
        {
            path: timesheet,
            element: (
                <LazyLoadWrapper>
                    <Timesheet />
                </LazyLoadWrapper>
            ),
        },
        {
            path: timeOff,
            element: (
                <LazyLoadWrapper>
                    <TimeOff />
                </LazyLoadWrapper>
            ),
        },
    ],
};

export default privateRoutes;
