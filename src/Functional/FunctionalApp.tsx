import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Requests } from "../api";
import { Dog } from "../types";
import { set } from "lodash-es";

export function FunctionalApp() {
  const { getAllDogs } = Requests;
  const [view, setView] = useState("allDogs");
  const [dogs, setDogs] = useState([] as Dog[]);
  const [allDogs, setAllDogs] = useState([] as Dog[]);
  const favoriteDogsCount = allDogs.filter((dog) => dog.isFavorite).length;
  const unfavoriteDogsCount = allDogs.filter((dog) => !dog.isFavorite).length;

  const setDogsByView = (newView: string, allDogData: Dog[]) => {
    if (newView === "favoriteDogs")
      setDogs(allDogData.filter((dog) => dog.isFavorite));
    else if (newView === "unfavoriteDogs")
      setDogs(allDogData.filter((dog) => !dog.isFavorite));
    else if (newView === "allDogs") setDogs(allDogData);
  };

  const changeView = (newView: string) => {
    const nextView = newView === view ? "allDogs" : newView;
    setDogsByView(nextView, allDogs);
    setView(nextView);
  };

  const fetchAllDogs = () => {
    getAllDogs().then((allDogData) => {
      dogs.length === 0 ? setDogs(allDogData) : setDogsByView(view, allDogData);
      setAllDogs(allDogData);
    });
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
        favoriteCount={favoriteDogsCount}
        unfavoriteCount={unfavoriteDogsCount}
      >
        {view !== "createDog" ? (
          <FunctionalDogs dogs={dogs} refreshDogs={fetchAllDogs} />
        ) : (
          <FunctionalCreateDogForm refreshDogs={fetchAllDogs} />
        )}
      </FunctionalSection>
    </div>
  );
}
