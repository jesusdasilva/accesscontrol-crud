import initModels from "../models/init-models";
import { conn } from "../configs/conn.config";

const models = initModels(conn);

export default {
  async findAll({name}) {
    const where = name ? { p_name: name } : {};
    const res = await models.profile.findAll({where});

    return res;
  },
  async create({ name, description }) {
    const res = await models.profile.create({
      p_name: name,
      p_description: description
    });

    return res;
  },
  async find({ idProfile }) {
    const res = await models.profile.findOne({
      where: {
        p_id: idProfile
      }
    });

    return res;
  },
  async modify({ idProfile }, { name, description }) {
    const res = await models.profile.update(
      {
        p_name: name,
        p_description: description,
        p_updated_at: new Date()
      },
      {
        where: {
          p_id: idProfile
        }
      }
    );

    return res;
  },
  async delete({ idProfile }) {
    const res = await models.profile.destroy({
      where: {
        p_id: idProfile
      }
    });

    return res;
  }
};
