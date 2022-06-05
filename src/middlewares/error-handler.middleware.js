import { StatusCodes } from "http-status-codes";
import { MESSAGE } from "../configs/constants.config";

function getMessageError(err){
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      return MESSAGE.DATABASE.DUPLICATE_VALUE;
    case "ValidationError":
      return err.msg.map(e => e.msg).toString();
    default:
      return MESSAGE.DATABASE.UNKNOWN_ERROR;
  }
}

export default function errorHandler(err, req, res, next) {
  console.log(err)
  
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    data: {},
    message: { text:  getMessageError(err), type: MESSAGE.TYPE.ERROR },
  });
}
