export default function Hero() {
  return (
    <section className="hero">
        <div className="wrapper hero__wrapper bottom-border">
            <div className="hero__content">
                <picture>
                    <source
                    media="(min-width: 62.5em)"
                    srcSet="/assets/profile/desktop.png"
                    />
                    <source
                    media="(min-width: 37.5em)"
                    srcSet="/assets/profile/tablet.png"
                    />
                    <img
                        className="hero__image"
                        src="/assets/profile/mobile.png"
                        alt="Moneeb Elobaid"
                        style={{ zIndex: "-1" }}
                    />
                </picture>
                <img
                    className="hero__rings"
                    src="/assets/icons/pattern-rings.svg"
                    alt=""
                    width="530"
                    height="129"
                />
                <img
                    className="hero__circle"
                    src="/assets/icons/pattern-circle.svg"
                    alt=""
                    width="129"
                    height="129"
                />
                <div className="hero__text">
                    <h1 className="hero__headline header-xl">Nice to meet you! I'm <span>Moneeb Elobaid</span>.</h1>
                    <p className="hero__description">
                    A frontend developer building interactive web applications using React js.
                    I fall in love with programming since 2022. I learnt a lot about web development, and made
                    many projects using different frontend tools and frameworks.

                    I love learning new technologies every day and be updated with new features in web development.
                    </p>
                    <a href="#contact" className="hero__contact underline">Contact me</a>
                </div>
            </div>
        </div>
    </section>
  );
}