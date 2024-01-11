import "./subhero.scss";

export const SubHero = () => {
  return (
    <>
      <section className="subhero">
        <div className="subhero__icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 411 401"
            className="subhero__icon-container--icon"
          >
            <path d="M205.5 401l-34.89-138.06-129.69 58.8 86.2-113.35L.27 143.66l142.36-3.3L114.17.86 205.5 110.1 296.83.85l-28.47 139.52 142.36 3.29-126.83 64.73 86.19 113.36-129.7-58.8L205.5 401z"></path>
          </svg>
        </div>
        <div className="subhero__text-blocks">
          <span className="subhero__text-blocks--first">
            Discover new music
          </span>
          <span className="subhero__text-blocks--second">Rate and review</span>
          <span className="subhero__text-blocks--third">Share the vibe</span>
        </div>
      </section>
    </>
  );
};

export default SubHero;
