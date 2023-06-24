import Button from "../../components/Button/Button";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCard from "../../components/ProductCard/ProductCard"
import React, { useState } from 'react';
import HeroSectionImage from '../../assets/background/pokebowl-cover.jpg';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductList = () => {

    const Pokebowl = [
        {
            id: 1,
            image: require('../../assets/products/pokebowl-anguille.png'),
            title: 'PokéBall Anguille',
            description: 'Là, tout n’est que rizières noyées, haies de bambous et chapeaux coniques, une Asie éternelle, préservée, vibrante et authentique.',
            categories: 'poisson'
        },
        {
            id: 2,
            image: require('../../assets/products/pokebowl-saumon.png'),
            title: 'Poké Ball Saumon',
            description: 'Là, tout n’est que rizières noyées, haies de bambous et chapeaux coniques, une Asie éternelle, préservée, vibrante et authentique.',
            categories: 'poisson'
        },
        {
            id: 3,
            image: require('../../assets/products/pokebowl-thon.png'),
            title: 'Poké Ball Thon',
            description: 'Le paradoxe du Cambodge, c’est d’être médiatisé au travers de ce qu’il a donné de plus grandiose, Angkor, et de pire, les Khmers rouges.',
            categories: 'poisson'
        },
        {
            id: 4,
            image: require('../../assets/products/pokebowl-poulet.png'),
            title: 'Poké Ball Poulet',
            description: 'Le Laos cultive une tranquille nonchalance, rythmée par le cours du Mékong, véritable colonne vertébrale du pays.',
            categories: 'viande'
        },
        {
            id: 5,
            image: require('../../assets/products/pokebowl-anguille.png'),
            title: 'PokéBall Vegan',
            description: 'Là, tout n’est que rizières noyées, haies de bambous et chapeaux coniques, une Asie éternelle, préservée, vibrante et authentique.',
            categories: 'vegan'
        },
        {
            id: 6,
            image: require('../../assets/products/pokebowl-saumon.png'),
            title: 'Poké Ball Boeuf',
            description: 'Là, tout n’est que rizières noyées, haies de bambous et chapeaux coniques, une Asie éternelle, préservée, vibrante et authentique.',
            categories: 'viande'
        },
        {
            id: 7,
            image: require('../../assets/products/pokebowl-thon.png'),
            title: 'Poké Ball Carotte',
            description: 'Le paradoxe du Cambodge, c’est d’être médiatisé au travers de ce qu’il a donné de plus grandiose, Angkor, et de pire, les Khmers rouges.',
            categories: 'vegan'
        },
        {
            id: 8,
            image: require('../../assets/products/pokebowl-poulet.png'),
            title: 'Poké Ball Poulet',
            description: 'Le Laos cultive une tranquille nonchalance, rythmée par le cours du Mékong, véritable colonne vertébrale du pays.',
            categories: 'viande'
        }
    ];


    const categories = ['vegan', 'viande', 'poisson', 'tout'];

    const [filteredProducts, setFilteredProducts] = useState(Pokebowl);
    const [selectedCategory, setSelectedCategory] = useState('tout');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        if (category === 'tout') {
            setFilteredProducts(Pokebowl);
        } else {
            const filtered = Pokebowl.filter((product) => product.categories === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="c-container">
            <Header />
            <HeroSection text="PokeBowls" image={HeroSectionImage}/> 
            <div className="u-flex u-flex-justify-center u-flex-gap-24 u-mt-32 u-mb-32">
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