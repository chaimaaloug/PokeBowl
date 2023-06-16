import Title from "components/Title/Title";
import style from "./NewsLetterSection.module.scss"

const NewsLetterSection = () => {
    return(
        <>
            <section className={style.container}>
                <Title title="Abonnez-vous à notre newsletter"/>
                <p>Entrez votre e-mail pour recevoir des offres quotidiennes.</p>
                <form className={style.formSubscribe} action="#">
                    <div class="input-group">
                        <input type="email" className={style.input} placeholder="Votre email..." />
                        <button className={style.button} type="submit" >S'abonner</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default NewsLetterSection;