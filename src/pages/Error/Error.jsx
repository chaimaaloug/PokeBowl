import { useRouteError } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";

const Error = () => {
    const {status} = useRouteError();

    return (
        <div className="container">
            <h2 className="errorStatus">{status}</h2>
            <p className="message">La page que vous recherchez semble introuvable.</p>
            <BackButton title="Revenir au site"/>
        </div>
    );
}

export default Error;