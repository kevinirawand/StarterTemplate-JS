
import { Sequelize } from "sequelize";

export default function db() {
   const database = new Sequelize("tomdoestech_learn", "root", "root", {
      host: "localhost",
      dialect: "mysql"
   });
   return database;
}
