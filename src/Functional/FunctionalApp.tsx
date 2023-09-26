import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Requests } from "../api";
import { Dog } from "../types";

export function FunctionalApp() {
  const { getAllDogs } = Requests;
  const [view, setView] = useState("allDogs");
  const [dogs, setDogs] = useState([] as Dog[]);
  const [allDogs, setAllDogs] = useState([] as Dog[]);
  const favoriteDogs = allDogs.filter((dog) => dog.isFavorite);
  const unfavoriteDogs = allDogs.filter((dog) => !dog.isFavorite);

  const fetchAllDogs = () => {
    getAllDogs()
      .then((dogs) => {
        setAllDogs(dogs)
        setDogs(dogs);
      });
  };

  const changeView = (newView: string) => {
    const nextView = newView === view ? "allDogs" : newView;
    
    switch (nextView) {
      case "favoriteDogs":
        setDogs(favoriteDogs);
        break;
      case "unfavoriteDogs":
        setDogs(unfavoriteDogs);
        break;
      case "allDogs":
        setDogs(allDogs);
        break;
      default:
        break;
    }

    setView(nextView);
  };

  useEffect(() => {
    fetchAllDogs();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection 
        view={view} 
        changeView={changeView}
        favoriteCount={favoriteDogs.length}
        unfavoriteCount={unfavoriteDogs.length}
      >
        {view !== "createDog" ? (
          <FunctionalDogs />
        ) : (
          <FunctionalCreateDogForm />
        )}
      </FunctionalSection>
    </div>
  );
}
