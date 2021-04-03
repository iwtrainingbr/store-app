import React from "react";
import Navbar from "../../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ShoppingCart(props) {
    let phone = "5585985695536";
    let totalPrice = 0;
    let text = `
_______________________ %0A
*✅ iwStore - Confirmação de Pedido* %0A
_______________________ %0A  %0A  %0A
|-----------------------| %0A`;

    let cart = JSON.parse(
        localStorage.getItem('carrinho') || '[]'
    );

    cart.map(product => {
        text += `| 1 ${product.name} - R$ ${product.price} %0A`;
        totalPrice += parseFloat(product.price);

        return product;
    });

    text += `
|-----------------------| %0A
| %0A
| *Total: * R$ ${totalPrice} 💲 %0A 
| *Forma de pagamento: * Dinheiro 🤑 %0A  %0A
-------------------------
`;
    let url_whatsapp = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;

    return (
        <div>
            <Navbar history={props.history}/>

            <h1>Carrinho de Compras</h1>

            <hr/>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(product => {
                    return (
                        <tr>
                            <td>{product.name}</td>
                            <td>1</td>
                            <td>R$ {product.price}</td>
                            <td>
                                Excluir
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <hr/>

            <a rel="noreferrer" id={"finalizar-pedido"} href={url_whatsapp} target="_blank">
                Finalizar Pedido
            </a>
        </div>
    )
}