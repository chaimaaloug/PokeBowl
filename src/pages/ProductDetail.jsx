//import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Pokebowls } from './ProductList';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const ProductDetail = () => {

    const id = useLocation().search.replace("?id=", "");
    let pokebowl;

    for (let index = 0; index < Pokebowls.length; index++) {
        const pokebowl1 = Pokebowls[index];
        if (pokebowl1.id == id) {
            pokebowl = pokebowl1;
            break;
        }
    }

    console.log(pokebowl);

    return (
        <div>
            <Header />
            <div className="l__productdetail-container">
                <div className="l__productdetail-content">
                    <h2>{pokebowl.title}</h2>
                    <img src={pokebowl.image} alt={pokebowl.title} />
                    <p className="category">{pokebowl.categories}</p>
                    <p>Normal: {pokebowl.normalPrice} </p>
                    <p>Large: {pokebowl.largePrice} </p>
                    <p>{pokebowl.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail;