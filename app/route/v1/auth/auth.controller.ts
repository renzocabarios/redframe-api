import service from "../users/users.service";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENV from '../../../env'

const authenticate = async (_req: Request<any>, _res: Response<any>) => {
  const { email, password } = _req.body;
  const data = await service.getByEmail(email);

  if (!data) {
    _res.send({ data: [], status: "fail", message: "User not found" });
    return
  }

  if (!await bcrypt.compare(password, data.password)) {
    _res.send({ data: [], status: "fail", message: "Password not match" });
    return
  }
  _res.send({ data, status: "success", message: "Get all user success", meta: { token: jwt.sign({ id: data._id }, ENV.JWT_KEY, { expiresIn: '1d' }) } });
};

export { authenticate };
