import { ReactNode } from "react";
import { Link } from "react-router-dom";

type FunctionalSectionProps = {
  children: ReactNode;
  view: string;
  favoriteCount: number;
  unfavoriteCount: number;
  changeView: (view: string) => void;
};

export const FunctionalSection = (props: FunctionalSectionProps) => {
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
