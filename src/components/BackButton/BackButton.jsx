import { Navigate, useNavigate } from "react-router-dom";
import style from "./BackButton.module.scss"

const BackButton = (props) => {
    
    const {title} = props
    const navigate = useNavigate();

    const goBack = () => {
        Navigate(-1)
    }

    return (
        <button className={style.button} callBack={goBack}>{title}</button>
    )
}

export default BackButton;