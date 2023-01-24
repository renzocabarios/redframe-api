import V1 from './v1';
import { IRoute } from '../types'
import { Express } from "express";

export const routes: IRoute[] = [
    {
        url: '/api/v1/sample',
        route: V1.sampleRoute,
    },
    {
        url: '/api/v1/users',
        route: V1.usersRoute,
    },
    {
        url: '/api/v1/auth',
        route: V1.authRoute,
    },
    {
        url: '/api/v1/customers',
        route: V1.customersRoute,
    },
    {
        url: '/api/v1/locations',
        route: V1.locationsRoute,
    },
    {
        url: '/api/v1/items',
        route: V1.itemsRoute,
    }
]

export const addRoutes = (app: Express) => {
    routes.forEach((route: IRoute) => {
        app.use(route.url, route.route);
    })
}