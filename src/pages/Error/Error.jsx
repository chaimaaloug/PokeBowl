import { useRouteError } from "react-router-dom";
import style from "./Error.module.scss";
import BackButton from "../../components/BackButton/BackButton";

const Error = () => {
    const {status} = useRouteError();

    return (
        <div className={style.container}>
            <h2 className={style.errorStatus}>{status}</h2>
            <p className={style.message}>La page que vous recherchez semble introuvable.</p>
            <BackButton title="Revenir au site"/>
        </div>
    );
}

export default Error;