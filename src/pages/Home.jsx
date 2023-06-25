
import HeroSection from "../components/HeroSection/HeroSection"
import NewsLetterSection from "../components/NewsLetterSection/NewsLetterSection"
import HeroSectionImage from '../assets/background/hero-1.jpg';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSection text="It's not just food, It's an experience" image={HeroSectionImage}/> 
            <NewsLetterSection />
            <Footer/>
        </>    
    )
}

export default Home;