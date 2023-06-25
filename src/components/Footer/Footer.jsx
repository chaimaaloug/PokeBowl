import style from "./Footer.module.scss"
import classNames from "classnames";
import Link from "../Link/Link"
import { Icon } from "semantic-ui-react";
import logo from "../../assets/logo.png"


const Footer = () => {

    const classes = classNames(
        style.footer, {
    });

    return (
        <footer className={classes}>
            
            <div className={style.footerContent}>
                <div>
                    <div className={style.footerLinks}>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div>
                    <h3 className="u-color--brown u-font-20">
                        Bowl Bliss
                    </h3>
                    <div className={style.footerLinks}>
                        <Link url="/" text="Home" />
                        <Link url="/pokebowls" text="Nos Pokebowls" />
                        <Link url="/contact" text="Nous contacter" />
                    </div>
                </div>
                <div>
                    <h3 className="u-color--brown u-font-20">
                        Nos réseaux sociaux
                    </h3>
                    <div className={style.footerLinks}>
                        <div className={style.mediaLink}>
                            <Icon name='facebook f' size='large' />
                            <p>Bowl Bliss</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='instagram' size='large' />
                            <p>@Bowl Bliss</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='pinterest' size='large' />
                            <p>Bowl Bliss</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='twitter' size='large' />
                            <p>@Bowl Bliss</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <span className="u-color--brown">Copyright © 2023 Bowl Bliss</span>
                <Link url="#" text="Mentions légales" />
                <Link url="#" text="Termes & Conditions" />
                <Link url="#" text="Politique de confidentialité" />
            </div>
        </footer>
    );
}


export default Footer;