import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import NewsLetterSection from "../components/NewsLetterSection/NewsLetterSection";
import StatisticsSection from '../components/StatisticsSection/StatisticsSection';
import Title from "../components/Title/Title"
import ProductCard from "../components/ProductCard/ProductCard"
import HeroSectionImage from '../assets/background/hero-1.jpg';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Pokebowls } from './ProductList';

const Home = () => {
    const id = useLocation().search.replace("?id=", "");
    let pokebowl;

    for (let index = 0; index < Pokebowls.length; index++) {
        const pokebowlBest = Pokebowls[index];
        if (pokebowlBest.id == id) {
            pokebowl = pokebowlBest;
            break;
        }
    }

    const recommendedPokebowls = Pokebowls.filter(pokebowl => pokebowl.bestSeller === true);

    console.log(pokebowl);
    console.log(recommendedPokebowls);

    return (
        <>
            <Header />
            <HeroSection text="It's not just food, It's an experience" image={HeroSectionImage} />
            <StatisticsSection />
            <div className="u-bgcolor--background u-pt-32">
                <Title title="Nos Best-Sellers du moment" />
                <ProductCard data={recommendedPokebowls} />
            </div>
            <NewsLetterSection />
            <Footer />
        </>
    );
}

export default Home;
