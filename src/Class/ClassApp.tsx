import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { Requests } from "../api";
import { Dog } from "../types";

export class ClassApp extends Component {
  state = {
    view: "allDogs",
    isLoading: false,
    dogs: [] as Dog[],
    allDogs: [] as Dog[],
  };

  updateLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  setDogsByView = (newView: string, allDogData: Dog[]) => {
    if (newView === "favoriteDogs")
      this.setState({ dogs: allDogData.filter((dog) => dog.isFavorite) });
    else if (newView === "unfavoriteDogs")
      this.setState({ dogs: allDogData.filter((dog) => !dog.isFavorite) });
    else if (newView === "allDogs") this.setState({ dogs: allDogData });
  };

  changeView = (newView: string) => {
    const { view, allDogs } = this.state;
    const nextView = newView === view ? "allDogs" : newView;
    this.setDogsByView(nextView, allDogs);
    this.setState({ view: nextView });
  };

  fetchAllDogs = () => {
    const { getAllDogs } = Requests;
    const { view } = this.state;
    this.updateLoading(true);
    getAllDogs()
      .then((allDogData) => {
        this.setDogsByView(view, allDogData);
        this.setState({ allDogs: allDogData });
      })
      .finally(() => {
        this.updateLoading(false);
      });
  };

  componentDidMount() {
    this.fetchAllDogs();
  }

  render() {
    const { view, isLoading, dogs, allDogs } = this.state;
    const { getAllDogs } = Requests;
    const favoriteDogsCount = allDogs.filter((dog) => dog.isFavorite).length;
    const unfavoriteDogsCount = allDogs.filter((dog) => !dog.isFavorite).length;

    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection
          view={view}
          changeView={this.changeView}
          favoriteCount={favoriteDogsCount}
          unfavoriteCount={unfavoriteDogsCount}
        >
          {view !== "createDog" ? (
            <ClassDogs
              dogs={dogs}
              isLoading={isLoading}
              refreshDogs={this.fetchAllDogs}
              setLoading={this.updateLoading}
            />
          ) : (
            <ClassCreateDogForm
              isLoading={isLoading}
              refreshDogs={this.fetchAllDogs}
              setLoading={this.updateLoading}
            />
          )}
        </ClassSection>
      </div>
    );
  }
}
