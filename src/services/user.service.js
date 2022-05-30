import { StatusCodes } from "http-status-codes";
import { user as dao } from "../database";
import { MESSAGE } from "../configs/constants.config";
import { passwordEncrypt } from "../utils/password-helper.utils";

const NAME = "User";

export default {
  async list({ email, idProfile }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.LIST.replace("NAME", NAME);
    const data = await dao.findAll({ email, idProfile });

    return { httpStatus, data, message };
  },
  async create({ name, email, idProfile, password }) { 
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.CREATE.replace("NAME", NAME);
    const data = await dao.create({ name, email, idProfile, password: await passwordEncrypt(password) });

    return { httpStatus, data, message };
  },
  async find({ idUser }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.FIND.replace("NAME", NAME);
    const data = await dao.find({ idUser });

    return { httpStatus, data, message };
  },
  async modify({ idUser }, { name, email, idProfile }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.MODIFY.replace("NAME", NAME);
    const data =
      (await dao.modify({ idUser },{ name, email, idProfile })) && (await dao.find({ idUser }));

    return { httpStatus, data, message };
  },
  async modifyPassword({ idUser }, { password }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.MODIFY.replace("NAME", NAME);
    const data =
      (await dao.modifyPassword({ idUser },{ password })) && (await dao.find({ idUser }));

    return { httpStatus, data, message };
  },
  async delete({ idUser }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.DELETE.replace("NAME", NAME);
    const data = (await dao.delete({ idUser })) && {};

    return { httpStatus, data, message };
  }
};
