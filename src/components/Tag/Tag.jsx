import style from "./Tag.module.scss";
import classNames from "classnames";


const Tag = (props) => {
    const { text, outline, } = props

    const classes = classNames(
        style.tag, {
        [style.tagOutline]: outline,
    });

    return (
        <div className={classes} >
            {text}
        </div>
    )

}

export default Tag;