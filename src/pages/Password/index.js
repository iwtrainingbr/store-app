import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import "./style.css";

export default function Password(props) {
    return (
        <div className={"page-password"}>
            <div className={"logo"}>
                <Typography variant="h4" className="title-password" >
                    <span className={"logo-iw"}>iw</span><span className={"logo-store"}>Store</span>
                </Typography>
            </div>
            <div className={"form-password"}>
                <form onSubmit={() => props.history.push('/login')}>
                    <Typography variant="h4" className="title-password" >
                        Recuperar Senha
                    </Typography>
                    <Typography variant="h6" className="" >
                        Codigo enviado para seu email
                    </Typography>
                    <TextField className="espaco" label={"Codigo"} variant={"outlined"} fullWidth required/>
                    <hr/>
                    <TextField className="espaco" label={"Nova Senha"} variant={"outlined"} type={"password"} autoComplete={"current-password"} fullWidth required/>
                    <TextField className="espaco" label={"Repetir Senha"} variant={"outlined"} type={"password"} autoComplete={"current-password"} fullWidth required/>
                    <Button  className="btn-password" type={"submit"} color="primary" variant={"contained"} fullWidth>
                        Cadastrar
                    </Button>
                </form>
            </div>
        </div>
    )
}