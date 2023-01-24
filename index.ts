import express, { Express } from "express";
import connectDB from "./app/db";
import ENV from "./app/env/index";
import { addRoutes } from './app/route'
import { addMiddlewares } from './app/middlewares'
const app: Express = express();

addMiddlewares(app);
addRoutes(app);

//initialization
const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
