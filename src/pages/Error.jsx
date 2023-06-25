import { useNavigate, useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button"

const Error = () => {
    const {status} = useRouteError();

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <div className="container">
                <h2 className="errorStatus">{status}</h2>
                <p className="message">La page que vous recherchez semble introuvable.</p>
                <Button text="Revenir au site" onClick={navigateToHome}/>
            </div>
            <Footer />
        </>
    );
}

export default Error;