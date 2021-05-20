import React, { Fragment, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthFireContext } from "./context/authFireContext";
// importando componente Vistas
import HomeView from "./views/HomeView" ;
import DetalleView from "./views/DetalleView";
import CrearProductoView from "./views/CrearProductoView";
import CrearCategoriasViews from "./views/CrearCategoriasViews";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/LoginView";
import EditarProductoView from "./views/EditarProductoView";
import RegisterView from "./views/RegisterView";
import CarritoView from "./views/CarritoView";
import CheckoutView from "./views/CheckoutView"
export default function Routes() {
  const { userId } = useContext(AuthFireContext); //con esto ya tengo el useID

  return (
    <Fragment>
      {/* definir las rutas */}
      <Route path="/" exact component={HomeView} />
      <Route path="/detalle/:id" exact component={DetalleView} />
      <Route path="/crearcategoria" exact component={CrearCategoriasViews} />
      <Route path="/crearproducto" exact component={CrearProductoView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/editarproducto/:id" exact component={EditarProductoView} />
      <Route path="/registrarse" exact component={RegisterView} />
      <Route path="/carrito" exact component={CarritoView} />
      <Route path="/checkout" exact component={CheckoutView} />
      <Route
        path="/dashboard"
        exact
        render={() => {
          if(userId !== null){
            return <DashboardView/>
          }else{
            return <Redirect to='/login'/>
          }
        }}
      />
    </Fragment>
  );
}