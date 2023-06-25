//import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Pokebowls } from './ProductList';

const ProductDetail = () => {

    const id = useLocation().search.replace("?id=", "");
    let pokebowl;

    for (let index = 0; index < Pokebowls.length; index++) {
        const pokebowl1 = Pokebowls[index];
        if(pokebowl1.id == id) {
            pokebowl = pokebowl1;
            break;
        }
    }

    console.log(pokebowl);

    return (
        <div>
            <h1>Product Detail Page</h1>
            <h2>{pokebowl.title}</h2>
            <p>{pokebowl.categories}</p>
            <p>Normal: {pokebowl.normalPrice} </p>
            <p>Large: {pokebowl.largePrice} </p>
            <img src={pokebowl.image} alt={pokebowl.title} />
            <p>{pokebowl.description}</p>
        </div>    
    )
}

export default ProductDetail;