import initModels from "../models/init-models";
import { conn } from "../configs/conn.config";
import * as passwordHelper from "../utils/password-helper.utils";

const models = initModels(conn);

export default {
  async findAll({ email, idProfile }) {
    const where = {
      ...(email ? { u_email: email } : {}),
      ...(idProfile ? { u_profile: idProfile } : {})
    };
    const res = await models.user.findAll({ where });

    return res;
  },
  async create({ name, email, idProfile, password }) {
    const res = await models.user.create({
      u_name: name,
      u_email: email,
      u_profile: idProfile,
      u_password: password
    });

    return res;
  },
  async find({ idUser }) {
    const res = await models.user.findOne({
      where: {
        u_id: idUser
      }
    });

    return res;
  },
  async modify({ idUser }, { name, email, idProfile }) { 
    const res = await models.user.update(
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
    const res = await models.user.update(
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
    const res = await models.user.destroy({
      where: {
        u_id: idUser
      }
    });

    return res;
  }
};
