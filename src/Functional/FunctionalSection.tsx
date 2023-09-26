import { Link } from "react-router-dom";
import { SectionProps } from "../types";

export const FunctionalSection = (props: SectionProps) => {
  const { children, view, changeView, favoriteCount, unfavoriteCount } = props;
  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">Dogs: </div>
        <Link to={"/class"} className="btn">
          Change to Class
        </Link>
        <div className="selectors">
          <div
            className={`selector ${view === "favoriteDogs" && "active"}`}
            onClick={() => {
              changeView("favoriteDogs");
            }}
          >
            favorited ( {favoriteCount} )
          </div>

          <div
            className={`selector ${view === "unfavoriteDogs" && "active"}`}
            onClick={() => {
              changeView("unfavoriteDogs");
            }}
          >
            unfavorited ( {unfavoriteCount} )
          </div>
          <div
            className={`selector ${view === "createDog" && "active"}`}
            onClick={() => {
              changeView("createDog");
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
