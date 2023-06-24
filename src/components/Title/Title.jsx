import style from "./Title.module.scss"

const Title = (props) => {
    const {title} = props
    return (
        <h2 className={style.title}>{title}</h2>
    )
}

export default Title;


