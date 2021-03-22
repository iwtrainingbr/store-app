import React from 'react';
import {Link} from "react-router-dom";
import {Button, TextField, Typography} from "@material-ui/core";
import "./style.css";

export default function Login(props) {
    return (
        <div className={"page-login"}>
            <div className={"logo"}>
                <Typography variant="h4" className="title-login" >
                    <span className={"logo-iw"}>iw</span><span className={"logo-store"}>Store</span>
                </Typography>
            </div>
            <div className={"form-login"}>
                <form onSubmit={() => props.history.push('/inicio')}>
                    <Typography variant="h4" className="title-login" >
                        Fazer login
                    </Typography>
                    <TextField className="email" label={"Email"} variant={"outlined"} fullWidth required/>
                    <TextField className="password" label={"Senha"} variant={"outlined"} type={"password"} autoComplete={"current-password"} fullWidth required/>
                    <Link to="/recuperarsenha">
                        <p className="btn-pass">Esqueci a senha</p>
                    </Link>
                    <Button  className="btn-login" type={"submit"} color="primary" variant={"contained"} fullWidth>
                        Fazer Login
                    </Button>

                    <hr/>

                    <p>Novo na iwStore?</p>

                    <Button className="" variant={"contained"} fullWidth onClick={() => props.history.push('/cadastro')}>
                        Criar sua conta
                    </Button>
                </form>
            </div>
        </div>
    )
}