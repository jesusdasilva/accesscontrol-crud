import { StatusCodes } from "http-status-codes";
import { reset as dao } from "../database";
import { MESSAGE } from "../configs/constants.config";
import { randonCode } from "../utils/password-helper.utils";

const NAME = "Reset";

export default {
  async list({ idUser, idRequestedBy, active }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.LIST.replace("NAME", NAME);
    const data = await dao.findAll({ idUser, idRequestedBy, active });

    return { httpStatus, data, message };
  },
  async create({ idUser, idRequestedBy }) { 
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.CREATE.replace("NAME", NAME);
    const data = await dao.create({ code: randonCode(), idUser, idRequestedBy });

    return { httpStatus, data, message };
  },
  async find({ idReset }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.FIND.replace("NAME", NAME);
    const data = await dao.find({ idReset });

    return { httpStatus, data, message };
  },
  async modifyActive({ idReset }) { 
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.MODIFY.replace("NAME", NAME);
    const data =
      (await dao.modifyActive({ idReset }, { active: false })) &&
      (await dao.find({ idReset }));

    return { httpStatus, data, message };
  },
  async delete({ idReset }) {
    const httpStatus = StatusCodes.OK;
    const message = MESSAGE.CRUD.DELETE.replace("NAME", NAME);
    const data = (await dao.delete({ idReset })) && {};

    return { httpStatus, data, message };
  }
};
