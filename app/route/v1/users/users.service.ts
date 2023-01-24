import model from "./users.model";
import investor from "./discriminator/investor.model";

const getAll = async (query: any) => {
  const { populate = "" } = query;
  return await model.find({ deleted: false }).populate(populate);
};

const getById = async (_id: string, query: any) => {
  const { populate = "" } = query;
  return await model.findOne({ _id, deleted: false }).populate(populate);
};

const add = async (body: any) => {
  if (body.type == "investor") return await investor.create(body);
  return await model.create(body);
};

const update = async (_id: string, body: any) => {
  return await model.findOneAndUpdate({ _id }, body, { new: true });
};

const deleteById = async (_id: string) => {
  return await model.findOneAndUpdate({ _id }, { deleted: true }, { new: true });
};

const getByEmail = async (email: string) => {
  return await model.findOne({ email, deleted: false });
};

export default { getAll, getById, add, update, deleteById, getByEmail };
