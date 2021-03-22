import React from "react";
import { API_URL } from "../../config";
import {Card, CardActionArea, CardContent, CardMedia, Divider} from "@material-ui/core";
import Navbar from "../../components/Navbar";

export default function Category(props) {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(API_URL+'/products.json')
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    response[id].id = id;

                    data.push(response[id]);
                }

                setProducts(data);
            });
    }, []);

    return (
        <div>
            <Navbar history={props.history}/>

            {products.map(prod => {
                return (
                    <div style={{margin: 15}}>
                        <Card>
                            <CardActionArea onClick={() => props.history.push(`/produtos/${prod.id}`)}>
                                <CardMedia style={{height: 300, width: '100%'}} image={prod.photos}/>
                                <CardContent>
                                    <h3>{prod.name}</h3>
                                </CardContent>
                            </CardActionArea>
                            <Divider/>
                        </Card>
                    </div>
                );
            })}
        </div>
    )
}