import {Router} from "express";
import * as imagen_controller from "../controllers/imagen";
import Multer from "multer";


export const usuario_router = Router();

//configurar el middleware de multer
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {

    //
    fileSize: 5 * 1024 * 1024,
  },
});


export const imagen_router = Router();

imagen_router.post(
  "/subirImagen",
  multer.single("imagen"),
  imagen_controller.subirImagen
);
imagen_router.delete("/eliminarImagen", imagen_controller.eliminarImagen);