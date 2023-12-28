import "./hero.scss";
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__logo-container">
        <h1 className="hero-section__logo-container--logo">VIBEVAULT</h1>
        <span className="hero-section__logo-container--description"></span>
      </div>
      <div className="hero-section__bottom-container">
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
