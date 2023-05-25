import style from "./Header.module.scss"

const Header = () => {
    return(
        <header className={style.header}>
            <h1 className={style.title}>PokeBowl</h1>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/panier">Panier</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;