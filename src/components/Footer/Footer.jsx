import style from "./Footer.scss"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <p>Footer</p>
            <div className={style.newsletter}>
                <p className={style.newsletterTitle}>Inscrivez-vous à notre newsletter</p>
                <form action="" method="post" className={style.newsletterForm}>
                    <label for="mail-newsletter">Votre email</label>
                    <input type="email" name="mail-newsletter" id="mail-newsletter"/>
                    <button>S'inscrire</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer;