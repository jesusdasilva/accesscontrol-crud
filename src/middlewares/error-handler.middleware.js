import { StatusCodes } from "http-status-codes";
import { MESSAGE } from "../configs/constants.config";

function getMessageError(err){
  const type = {
    "SequelizeUniqueConstraintError": MESSAGE.DATABASE.DUPLICATE_VALUE,
  }
  
  return type[err.name] || MESSAGE.ERROR.SOMETHING_WRONG;
}

export default function errorHandler(err, req, res, next) {

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    data: {},
    message: { text:  getMessageError(err), type: MESSAGE.TYPE.ERROR },
  });
}
