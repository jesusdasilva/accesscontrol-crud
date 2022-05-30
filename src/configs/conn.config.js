import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./app.config";

export const conn = new Sequelize(DATABASE_URL);