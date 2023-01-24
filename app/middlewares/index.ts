import { Express } from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import authMiddleware from "./auth.middleware";

export const middlewares: any[] = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    authMiddleware
]

export const addMiddlewares = (app: Express) => {
    middlewares.forEach((middleware: any) => {
        app.use(middleware);
    })
}