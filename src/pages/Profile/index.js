import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import "./style.css";

export default function Profile(props) {
    return (
        <div className={"page-profile"}>
            <div className={"logo"}>
                <Typography variant="h4" className="title-profile" >
                    <span className={"logo-iw"}>iw</span><span className={"logo-store"}>Store</span>
                </Typography>
            </div>
            <div className={"form-profile"}>
                <form onSubmit={() => props.history.push('/login')}>
                    <Typography variant="h4" className="title-profile" >
                        Cadastro
                    </Typography>
                    <Typography variant="h6" className="" >
                        Conta
                    </Typography>
                    <TextField className="espaco" label={"Email"} variant={"outlined"} fullWidth required/>
                    <TextField className="espaco" label={"Senha"} variant={"outlined"} type={"password"} autoComplete={"current-password"} fullWidth required/>
                    <TextField className="espaco" label={"Repetir Senha"} variant={"outlined"} type={"password"} autoComplete={"current-password"} fullWidth required/>
                    <hr/>
                    <Typography variant="h6" className="" >
                        Dados Pessoais
                    </Typography>
                    <TextField className="espaco" label={"Endereço"} variant={"outlined"} fullWidth required/>
                    <TextField className="espaco" label={"Complemento"} variant={"outlined"} fullWidth/>
                    <TextField className="espaco" label={"Telefone"} variant={"outlined"} fullWidth required/>
                    <Button  className="btn-profile" type={"submit"} color="primary" variant={"contained"} fullWidth>
                        Cadastrar
                    </Button>
                </form>
            </div>
        </div>
    )
}