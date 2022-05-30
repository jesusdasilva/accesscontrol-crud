import initModels from "../models/init-models";
import { conn } from "../configs/conn.config";
import * as passwordHelper from "../utils/password-helper.utils";

const models = initModels(conn);

export default {
  async findAll({ idUser, idRequestBy, active }) {
    const where = {
      ...(idUser ? { r_user: idUser } : {}),
      ...(idRequestBy ? { r_request_by: idRequestBy } : {}),
      ...(active ? { r_active: active } : {})
    };
    const res = await models.reset.findAll({ where });

    return res;
  },
  async create({ code, idUser, idRequestedBy }) { 
    const res = await models.reset.create({
      r_code: code,
      r_user: idUser,
      r_requested_by: idRequestedBy
    });

    return res;
  },
  async find({ idReset }) { 
    const res = await models.reset.findByPk(idReset);

    return res;
  },
  async modify({ idUser }, { name, email, idProfile }) {
    const res = await models.reset.update(
      {
        u_name: name,
        u_email: email,
        u_profile: idProfile,
        u_updated_at: new Date()
      },
      {
        where: {
          u_id: idUser
        }
      }
    );

    return res;
  },
  async modifyPassword({ idUser }, { password }) {
    const res = await models.reset.update(
      {
        u_password: await passwordHelper.encrypt(password),
        u_updated_at: new Date()
      },
      {
        where: {
          u_id: idUser
        }
      }
    );

    return res;
  },
  async delete({ idUser }) {
    const res = await models.reset.destroy({
      where: {
        u_id: idUser
      }
    });

    return res;
  }
};
