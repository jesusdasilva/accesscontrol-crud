import { StatusCodes } from "http-status-codes";
import { profile as dao } from "../database";
import { MESSAGE } from "../configs/constants.config";

const NAME = "Profile";

export default {
  async list({name}) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.LIST.replace("NAME", NAME);
    const data = await dao.findAll({name});

    return { httpStatus, data, message };
  },
  async create({ name, description }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.CREATE.replace("NAME", NAME);
    const data = await dao.create({ name, description });

    return { httpStatus, data, message };
  },
  async find({ idProfile }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.FIND.replace("NAME", NAME);
    const data = await dao.find({ idProfile });

    return { httpStatus, data, message };
  },
  async modify({ idProfile }, { name, description }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.MODIFY.replace("NAME", NAME);
    const data = await dao.modify({ idProfile }, { name, description }) && await dao.find({ idProfile });

    return { httpStatus, data, message };
  },
  async delete({ idProfile }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.DELETE.replace("NAME", NAME);
    const data = await dao.delete({ idProfile }) && {};

    return { httpStatus, data, message };
  }
};
