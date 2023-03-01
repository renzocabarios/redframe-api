import service from "./payments.service";
import { Request, Response } from 'express';

const getAll = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.getAll(_req.query);
  _res.send({ data, status: "success", message: "Get all payments success" });
};

const getById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.getById(id, _req.query);
  _res.send({ data: [data], status: "success", message: "Get payments success" });
};

const add = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.add(_req.body);
  _res.send({ data: [data], status: "success", message: "Create payments success" });
};

const update = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({ data: [data], status: "success", message: "Update payments success" });
};

const deleteById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({ data: [data], status: "success", message: "Delete payments success" });
};

export { getAll, getById, add, update, deleteById };
