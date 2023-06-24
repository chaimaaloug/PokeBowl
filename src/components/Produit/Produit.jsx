import style from "./Produit.module.scss"

const Produit = () => {
    return (
        <div className={style.produit}>
            <img src="" alt="" srcset="" />
            <p>Classic Tuna</p>
            <p>
                Neque porro quisquam est qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci velit...
            </p>
            <ul>
                <li>Sésame</li>
            </ul>
        </div>
    )
}

export default Produit;