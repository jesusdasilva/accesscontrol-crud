import { reset as service } from "../services";

export default {
  async list  (_, res, next) {
    try {
      res.locals = await service.list();
      next();
    } catch (error) {
      next(error);
    }
  },
  async create  ({ body }, res, next) {
    try {
      res.locals = await service.create(body);
      next();
    } catch (error) {
      next(error);
    }
  },
  async find  ({ params }, res, next)  {
    try {
      res.locals = await service.find(params);
      next();
    } catch (error) {
      next(error);
    }
  },
  async modify  ({ params, body }, res) {
    try {
      res.locals = await service.modify(params, body);
      next();
    } catch (error) {
      next(error);
    }
  },
  async delete  ({ params }, res)  {
    try {
      res.locals = await service.delete(params);
      next();
    } catch (error) {
      next(error);
    }
  }
};
