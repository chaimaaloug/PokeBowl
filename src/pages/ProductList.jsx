import HeroSection from "../components/HeroSection/HeroSection";
import ProductCard from "../components/ProductCard/ProductCard"
import React, { useState } from 'react';
import HeroSectionImage from '../assets/background/pokebowl-cover.jpg';
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const Pokebowls = [
        {
            id: 1,
            image: require('../assets/products/pokebowl-anguille.png'),
            title: 'PokéBall Anguille',
            description: "Une expérience gustative exquise avec de l'anguille grillée à la peau croustillante, des légumes frais, des algues croquantes et une sauce unagi savoureuse. Une combinaison audacieuse de saveurs sucrées et salées pour les amateurs de fruits de mer.",
            categories: 'Poisson',
            normalPrice: '10.95€',
            largePrice: '13.95€',
            bestSeller: true,
            allergene: 'Sésame'
        },
        {
            id: 2,
            image: require('../assets/products/pokebowl-saumon.png'),
            title: 'Poké Ball Saumon',
            description: "Un délice marin rempli de cubes de saumon frais et délicat, de légumes colorés, d'avocat crémeux et d'une sauce ponzu acidulée. Chaque bouchée offre une explosion de saveurs délicates et une texture délicate.",
            categories: 'Poisson',
            normalPrice: '10.95€',
            largePrice: '13.95€',
            bestSeller: true
        },
        {
            id: 3,
            image: require('../assets/products/pokebowl-thon.png'),
            title: 'Poké Ball Thon',
            description: "Un pokebowl classique mettant en valeur des tranches de thon frais et rouge, des légumes croquants, des avocats crémeux et une sauce soja épicée. Une explosion de saveurs umami et une texture fondante qui satisfera vos papilles.",
            categories: 'Poisson',
            normalPrice: '10.95€',
            largePrice: '13.95€',
            bestSeller: true,
            allergene: 'Crustacé'
        },
        {
            id: 4,
            image: require('../assets/products/pokebowl-poulet.png'),
            title: 'Poké Ball Poulet',
            description: "Un pokebowl réconfortant avec des morceaux de poulet grillé tendres et juteux, des légumes croquants, des avocats crémeux et une sauce teriyaki délicieuse. Une combinaison parfaite de protéines maigres et de saveurs audacieuses.",
            categories: 'Viande',
            normalPrice: '10.95€',
            largePrice: '13.95€',
            allergene: 'Gluten'
        },
        {
            id: 5,
            image: require('../assets/products/pokebowl-anguille.png'),
            title: 'PokéBall Vegan',
            description: "Un mélange savoureux de légumes frais et croquants, de tofu mariné délicatement, accompagné d'une vinaigrette légère et de graines de sésame pour une touche de texture. Un festin végétalien rempli de saveurs saines et équilibrées.",
            categories: 'Vegan',
            normalPrice: '10.95€',
            largePrice: '13.95€'
        },
        {
            id: 6,
            image: require('../assets/products/pokebowl-saumon.png'),
            title: 'Poké Ball Boeuf',
            description: "Un délice carné avec des tranches de bœuf tendres et juteuses, des légumes croquants, des oignons caramélisés et une sauce sriracha pour une touche épicée. Un pokebowl qui ravira les amateurs de viande avec sa combinaison de saveurs audacieuses.",
            categories: 'Viande',
            normalPrice: '10.95€',
            largePrice: '13.95€',
            allergene: 'Gluten'
        },
        {
            id: 7,
            image: require('../assets/products/pokebowl-thon.png'),
            title: 'Poké Ball Carotte',
            description: "Un pokebowl végétarien frais et croquant avec des carottes râpées, des légumes colorés et une vinaigrette légère. Une explosion de saveurs végétales saines et délicieuses.",
            categories: 'Vegan',
            normalPrice: '10.95€',
            largePrice: '13.95€'
        },
        {
            id: 8,
            image: require('../assets/products/pokebowl-poulet.png'),
            title: 'Poké Ball Poulet',
            description: "Un pokebowl réconfortant avec des morceaux de poulet grillé tendres et juteux, des légumes croquants, des avocats crémeux et une sauce teriyaki délicieuse. Une combinaison parfaite de protéines maigres et de saveurs audacieuses.",
            categories: 'Viande',
            normalPrice: '10.95€',
            largePrice: '13.95€',
            allergene: 'Gluten'
        }
    ];

const ProductList = () => {

    const categories = ['Vegan', 'Viande', 'Poisson', 'Tout'];

    const [filteredProducts, setFilteredProducts] = useState(Pokebowls);
    const [selectedCategory, setSelectedCategory] = useState('Tout');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        if (category === 'Tout') {
            setFilteredProducts(Pokebowls);
        } else {
            const filtered = Pokebowls.filter((product) => product.categories === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="l__productlist-conatainer">
            <Header />
            <HeroSection text="Nos PokeBowls" image={HeroSectionImage}/> 
            <div className="u-flex u-flex-justify-center u-flex-gap-24 u-mt-64 u-mb-64">
                {categories.map((category) => (
                    <Button
                        key={category}
                        text={category}
                        onClick={() => handleCategoryClick(category)}
                    />
                ))}
            </div>
            <ProductCard data={filteredProducts} />
            <Footer/>
        </div>
    );
}

export default ProductList;