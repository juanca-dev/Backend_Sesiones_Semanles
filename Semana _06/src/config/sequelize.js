import { Sequelize } from "sequelize";

export const conexion = new Sequelize(
  "almacen", //database name
  "root",   //username
  "root",   //contraseña
{
    dialect: "mysql",
    host: "127.0.0.1",
    timezone: "-05:00",
    dialectOptions: {

      dateStrings: true,
    },
  }
);