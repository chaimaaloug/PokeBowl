
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionImage from '../assets/background/hero1.jpg';
import {MdSupportAgent} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {BiSolidTimeFive} from 'react-icons/bi'




const Contact = () => {
    return (
        <main>
            <Header />
            <HeroSection text="Contactez-nous" image={HeroSectionImage} />
            <div className="l__contact-container">
                    <div className="l__contact-content">
                        <ImLocation2 className="l__contact-icon"/>
                        <div className="l__contact-info">
                            <h3>Adresse</h3>
                            <p>21 Rue de Molinel</p>
                            <p>59000 Lille, France</p>
                        </div>
                    </div>
                    <div className="l__contact-content">
                        <MdSupportAgent className="l__contact-icon"/>
                        <div className="l__contact-info">
                            <h3>Support</h3>
                            <p>Téléphone : +3389543321</p>
                            <p>Email : contact@bowlbliss.com</p>
                        </div>
                    </div>
                    <div className="l__contact-content">
                        <BiSolidTimeFive className="l__contact-icon" />
                        <div className="l__contact-info">
                            <h3>Horaires d'ouvertures</h3>
                            <p>Lundi - Samedi</p>
                            <p>11:30 - 22:00</p>
                        </div>
                    </div>
            </div>
            <Footer />
        </main>    
    )
}

export default Contact;