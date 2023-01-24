import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ENV from "../env";

export default async (_req: Request<any>, _res: Response<any>, _next: NextFunction) => {

    const publicRoutes = [{ url: "/api/v1/users", method: "POST" }, { url: "/api/v1/auth", method: "POST" }]

    if (checkRoutes(publicRoutes, _req.url, _req.method)) {
        _next();
        return;
    }

    const token = getToken(_req.headers['authorization']);

    if (!token) {
        _res.send({ data: [], status: "fail", message: "Token Needed" });
        return;
    }

    let userId = await getUserId(token);

    if (!userId) {
        _res.send({ data: [], status: "fail", message: "Invalid token" });
        return;
    }

    _next();
}


const getToken = (header: string = ""): string => {
    return header.split(' ')[1];
}

const getUserId = async (token: string = ""): Promise<string | null> => {
    return (jwt.verify(token, ENV.JWT_KEY).sub as string) ?? null;
}

const checkRoutes = (routes: any[], currUrl: string, currMethod: string): boolean => {
    return routes.some(route => route.url === currUrl && route.method === currMethod);
}