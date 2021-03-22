import {Route, Switch} from "react-router-dom";
import Teste from "../../pages/Teste";
import Home from "../../pages/Home";
import ProductList from "../../pages/ProductList";
import ProductDetails from "../../pages/ProductDetails";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Roles from "../../pages/Roles";
import Password from "../../pages/Password";
import Contador from "../../pages/Contador";
import Category from "../../pages/Category";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/inicio"} component={Home}/>
            <Route exact path={"/categorias/:id"} component={Category}/>
            <Route exact path={"/produtos"} component={ProductList}/>
            <Route exact path={"/produtos/:id"} component={ProductDetails}/>
            <Route exact path={"/teste"} component={Teste}/>
            <Route exact path={"/contador"} component={Contador}/>

            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/cadastro"} component={Profile}/>
            <Route exact path={"/permissoes"} component={Roles}/>
            <Route exact path={"/recuperarsenha"} component={Password}/>
        </Switch>
    );
}