import style from "./HeroSection.module.scss"

const HeroSection = () => {
    return(
        <>
            <section className={style.background}>
                <div className={style.container}>
                    <h1 className={style.title}>It's not just food, It's an experience</h1>
                </div>
            </section>
        </>
    )
}

export default HeroSection;