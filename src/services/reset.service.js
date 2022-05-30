import { StatusCodes } from 'http-status-codes';

export default {
    async list(req, res, next) {
        const httpStatus = StatusCodes.OK;
        const message = 'reset list'
        const data = {}

        return { httpStatus, data, message };
    },
    async create(req, res, next) {
        const httpStatus = StatusCodes.OK;
        const message = 'reset create'
        const data = {}

        return { httpStatus, data, message };
    },
    async find(req, res, next) {
        const httpStatus = StatusCodes.OK;
        const message = 'reset find'
        const data = {}

        return { httpStatus, data, message };
    },
    async modify(req, res, next) {
        const httpStatus = StatusCodes.OK;
        const message = 'reset modify'
        const data = {}

        return { httpStatus, data, message };
    },
    async delete(req, res, next) {
        const httpStatus = StatusCodes.OK;
        const message = 'reset delete'
        const data = {}

        return { httpStatus, data, message };
    },
};

