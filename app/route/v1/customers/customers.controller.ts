import service from "./customers.service";
import { Request, Response } from 'express';


const getAll = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.getAll(_req.query);
  _res.send({ data, status: "success", message: "Get all customer success" });
};

const getById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.getById(id, _req.query);
  _res.send({ data: [data], status: "success", message: "Get customer success" });

};

const add = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.add(_req.body);
  _res.send({ data: [data], status: "success", message: "Create customer success" });
};

const update = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({ data: [data], status: "success", message: "Update customer success" });
};

const deleteById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({ data: [data], status: "success", message: "Delete customer success" });
};


export { getAll, getById, add, update, deleteById };
