import { Categoria } from "../config/relaciones";
export const crearCategoria = (req, res) => {
  //
  //
  //
  try{
    const  nuevaCategoria = await Categoria.create(req.body);
    res.status(201).json({
        succes:true,
        content: nuevaCategoria,
        message: "Categoria creada Exitosamente"
    });

  } catch (error){
    res.status(500).json({
      succes: false,
      content: error,
      message: "Error al cargar la Categoria",
    });
  }
 
};
