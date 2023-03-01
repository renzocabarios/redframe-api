import service from "./deliveries.service";
import { Request, Response } from 'express';

const getAll = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.getAll(_req.query);
  _res.send({ data, status: "success", message: "Get all deliveries success" });
};

const getById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.getById(id, _req.query);
  _res.send({ data: [data], status: "success", message: "Get deliveries success" });

};

const add = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.add(_req.body);
  _res.send({ data: [data], status: "success", message: "Create deliveries success" });
};

const update = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({ data: [data], status: "success", message: "Update deliveries success" });
};

const deleteById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({ data: [data], status: "success", message: "Delete deliveries success" });
};

export { getAll, getById, add, update, deleteById };
