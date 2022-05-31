import initModels from "../models/init-models";
import { conn } from "../configs/conn.config";

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
  async modifyActive({ idReset }, { active }) {
    const res = await models.reset.update(
      {
        r_active: active,
        r_updated_at: new Date()
      },
      {
        where: {
          r_id: idReset
        }
      }
    );

    return res;
  },
  async delete({ idReset }) {
    const res = await models.reset.destroy({
      where: {
        r_id: idReset
      }
    });

    return res;
  }
};
