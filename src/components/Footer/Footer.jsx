import style from "./Footer.module.scss"
import classNames from "classnames";
import Link from "../Link/Link"
import { Icon } from "semantic-ui-react";


const Footer = () => {

    const classes = classNames(
        style.footer, {
      });

    return (
        <div className={classes}>
            <div className={style.footerContent}>
                <div>
                    <p className="u-font-700 u-color--bleu-marine-700">
                    Nos Produits
                    </p>
                    <div className={style.footerLinks}>
                        <Link url="#" text="Découvrir nos Pokebowls" />
                        <Link url="#" text="Nos best-sellers du moment" />
                    </div>
                </div>
                <div>
                    <p className="u-font-700 u-color--bleu-marine-700">
                    Bowl Bliss
                    </p>
                    <div className={style.footerLinks}>
                        <Link url="/about" text="Qui sommes-nous ?" />
                        <Link url="#" text="Besoin d’aide ?" />
                        <Link url="#" text="Nous contacter" />
                    </div>
                </div>
                <div>
                    <p className="u-font-700 u-color--bleu-marine-700">
                    Nos réseaux sociaux
                    </p>
                    <div className={style.footerLinks}>
                        <div className={style.mediaLink}>
                            <Icon name='facebook f' size='large'/>
                            <p>Bowl Bliss</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='instagram' size='large'/>
                            <p>@Bowl Bliss</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='pinterest' size='large'/>
                            <p>Bowl Bliss</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='twitter' size='large'/>  
                            <p>@Bowl Bliss</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <span className="u-color--bleu-marine-700">Copyright © 2023 Bowl Bliss</span>
                <Link url="#" text="Mentions légales" />
                <Link url="#" text="Termes & Conditions" />
                <Link url="#" text="Politique de confidentialité" />
            </div>
        </div>
    );
}


export default Footer;