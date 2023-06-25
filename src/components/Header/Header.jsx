/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from '../Link/Link';
import style from "./Header.module.scss"
import logo from "../../assets/logo.png"
import classNames from "classnames";

const Header = () => {

    const classes = classNames(
        style.header, {
    });

    return (
        <header className={classes}>
            <div className='u-flex-self-center u-flex-shrink-none'>
                <a href="/"><img src={logo} width={180} /></a>
            </div>
            <div className={style.HeaderNav}>
                <Link header color="secondary" url="/pokebowls" text="Nos Pokebowls" />
                <Link header url="" text="Nous contacter" />
            </div>
        </header>
    );
};

export default Header;
