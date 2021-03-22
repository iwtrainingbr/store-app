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
    }, []);

    return (
        <div>
            <Navbar/>

            <h1>Página de Detalhes do Produto {product.name}</h1>

            <img style={{width: '100%'}} src={product.photos}/>
        </div>
    );
}