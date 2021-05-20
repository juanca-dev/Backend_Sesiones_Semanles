import fire from "../config/Firebase"

let db = fire.firestore() //ESTO ES UNA REFERENCIA A MI BD
//Documentación: https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0

let getVentas = () => {
  return new Promise((resolve,reject) => {
    let peticionAMisVentas = db.collection("ventas") // esta es la referencia a mi collecion de ventas

    peticionAMisVentas.get().then((misVentas) => {
      let arregloVentas = []

      misVentas.forEach((venta) => {
       arregloVentas.push(venta.data()) //tengo que pasarlo por .data()
      })

      resolve(arregloVentas)
    })
  })
}
let registrarVenta = (venta) => {
  return new Promise((resolve, reject) => {
    let peticionCrearVenta = db.collection("ventas") //ref.. coleccion

    peticionCrearVenta.add(venta).then((nuevaVenta) => { //nuevaVenta deberia ser el nuevo doc. creado
      resolve(nuevaVenta.id)
    })
  })
}

export {
  getVentas,
  registrarVenta
}