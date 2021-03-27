import React from "react";
import {API_URL} from "../../config";
import Navbar from "../../components/Navbar";

export default function ProductDetails(props) {
    const id = props.match.params.id;
    const [product, setProduct] = React.useState({});
    
    React.useEffect(() => {
        fetch(API_URL+`/products/${id}.json`)
        .then(response => response.json())
        .then(response => {
            setProduct(response);
        });
    }, [id]);

    const addToCart = () => {
        let cart = JSON.parse(
            localStorage.getItem('carrinho') || '[]'
        );

        cart.push(product);

        localStorage.setItem('carrinho', JSON.stringify(cart));

        alert('Produto adicionado ao carrinho');
    };

    return (
        <div>
            <Navbar history={props.history}/>

            <h1>Página de Detalhes do Produto {product.name}</h1>

            <img alt={"Banner"} style={{width: '100%'}} src={product.photos}/>

            <button onClick={addToCart}>Adicionar ao Carrinho</button>
        </div>
    );
}