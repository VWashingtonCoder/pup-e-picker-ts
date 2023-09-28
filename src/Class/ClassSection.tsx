// you can use `ReactNode` to add a type to the children prop
import { Component } from "react";
import { Link } from "react-router-dom";
import { SectionProps } from "../types";

export class ClassSection extends Component<SectionProps> {
  render() {
    const { children, view, changeView, favoriteCount, unfavoriteCount } =
      this.props;

    return (
      <section id="main-section">
        <div className="container-header">
          <div className="container-label">Dogs: </div>

          <Link to={"/functional"} className="btn">
            Change to Functional
          </Link>

          <div className="selectors">
            {/* This should display the favorited count */}
            <div
              className={`selector ${view === "favoriteDogs" && "active"}`}
              onClick={() => changeView("favoriteDogs")}
            >
              favorited ( {favoriteCount} )
            </div>

            {/* This should display the unfavorited count */}
            <div
              className={`selector ${view === "unfavoriteDogs" && "active"}`}
              onClick={() => changeView("unfavoriteDogs")}
            >
              unfavorited ( {unfavoriteCount} )
            </div>
            <div
              className={`selector ${view === "createDog" && "active"}`}
              onClick={() => changeView("createDog")}
            >
              create dog
            </div>
          </div>
        </div>
        <div className="content-container">{children}</div>
      </section>
    );
  }
}
