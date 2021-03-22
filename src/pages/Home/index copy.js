import {useState} from "react";
import { Button } from "@material-ui/core";

export default function Home() {
    const [numero, setNumero] = useState(100);
    
    const aumentarNumero = () => {
        setNumero(numero + 1)
    };

    const diminuirNumero = () => {
        setNumero(numero - 1)
    };

    return (
        <div>
            <h1>Página Inicial</h1>

            Valor: {numero}

            <br /><br />

            <Button onClick={aumentarNumero} color={"primary"} variant={"outlined"}>
                +
            </Button>
            <Button onClick={diminuirNumero} color={"primary"} variant={"outlined"}>
                -
            </Button>

            <br /><br />

            <Button color={"secondary"} variant={"contained"}>
                Clique aqui
            </Button>
        </div>
    );
}