//libreria que nos permite manipular nuestro storage de firebase
import { Storage } from "@google-cloud/storage";
//
const storage = new Storage({
  projectId: "cuerosferrer-cd4f1",
  keyFilename: "./credenciales_firebase.json",
});
// ahora creamos la instancia de nuestro storage
const bucket = storage.bucket("cuerosferrer-cd4f1.appspot.com");

export const subirArchivo = (archivo) => {
  return new Promise((resuelto, rechazo)=>{
    //verificamos que tenemos un archivo que subir
    if (!archivo) return rechazo("No se encontro el archivo");
    //crea la instancia en nuestro archivo en firebase y  adicionalmente a ello nos retorna metodos para
    //manipular dicho archivo
    const file = bucket.file(archivo.originalname);
    // agregamos la configuración adicional  de nuestro archivo como su extension y formato
    const blobStream = file.createWriteStream({
      metadata: {
        contentType: archivo.mimetype,
      },
    });
    //  el proceso de subida se genera en un segundo plano mediante el cual se controla en estados
    blobStream.on("error", (error) =>{
      // ingresan cuando el archivo tuvo problema para subir a firebase
      return rechazo(error);
    });
    blobStream.on("finish", () =>{
      // ingresara a este arrow function cuanto el archivo termine de subir exitosamente
      //getSigneUrl sive para que nos  brinde firebasse una ruta para acceder a nuestro archivo
      //fuera del storage
      file.getSignedUrl({
        action: "read",
        expires: "12-31-2021", //usa //mes ,dia. año
      }).then((link)=>{
        return resuelto(link);
      })
      .catch((error) => {
        return rechazo(error);
      });
    });
    // culmino el proceso de  conexion con firebase
    // le mando el contenido del archivo
    // en si este es el inicio y fin de la conexion con firebaase, luego viene los estado  de mas arriba
    blobStream.end(archivo.buffer);
  });
};