import service from "./users.service";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import ENV from '../../../env'

const getAll = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.getAll(_req.query);
  _res.send({ data, status: "success", message: "Get all user success" });
};

const getById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.getById(id, _req.query);
  _res.send({ data: [data], status: "success", message: "Get user success" });

};

const add = async (_req: Request<any>, _res: Response<any>) => {
  const { password, ...rest } = _req.body;
  const hashed = bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.add({ password: hashed, ...rest });
  _res.send({ data: [data], status: "success", message: "Create user success" });
};

const update = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const { password, ...rest } = _req.body;
  const data = await service.update(id, rest);
  _res.send({ data: [data], status: "success", message: "Update user success" });
};

const deleteById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({ data: [data], status: "success", message: "Delete user success" });
};

const changePassword = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const { password } = _req.body;
  const hashed = bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.update(id, { password: hashed });
  _res.send({ data: [data], status: "success", message: "Change password success" });
};

export { getAll, getById, add, update, deleteById, changePassword };
