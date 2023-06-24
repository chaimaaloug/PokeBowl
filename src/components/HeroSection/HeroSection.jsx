import style from "./HeroSection.module.scss"

const HeroSection = ({text, image }) => {
    return (
      <>
        <section
          className={style.background}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
          }}
        >
          <div className={style.container}>
            <h1 className={style.title}>{text}</h1>
          </div>
        </section>
      </>
    );
  };

export default HeroSection;