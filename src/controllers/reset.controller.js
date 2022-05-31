import { reset as service } from "../services";

export default {
  async list  ({query}, res, next) {
    try {
      res.locals = await service.list(query);
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
  async modifyActive  ({ params }, res, next) {
    try {
      res.locals = await service.modifyActive(params);
      next();
    } catch (error) {
      next(error);
    }
  },
  async delete  ({ params }, res, next)  {
    try {
      res.locals = await service.delete(params);
      next();
    } catch (error) {
      next(error);
    }
  }
};
