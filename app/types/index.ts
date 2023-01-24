export type RouteMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export interface IRoute {
    url: string;
    route: any;
}