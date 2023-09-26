import { DogCard } from "../Shared/DogCard";
import { DogsProps } from "../types";
import { Requests } from "../api";

export const FunctionalDogs = ({ dogs, refreshDogs }: DogsProps) => {
  const { deleteDog, updateDog } = Requests;

  const handleFavoriteClick = (id: number, name: string, isFavorite: boolean) => {
    const message = isFavorite ? "unfavorited dog" : "favorited dog";

    updateDog(id, !isFavorite).then(() => {
      refreshDogs();
      alert(`${message}: ${name}`);
    });
  };


  return (
    <>
      {dogs.map((dog) => {
        const { name, isFavorite } = dog;
        const id = dog.id || 0;

        return (
          <DogCard
            dog={dog}
            key={id}
            onTrashIconClick={() => {
              deleteDog(id).then(() => {
                refreshDogs();
                alert(`deleted dog: ${name}`);
              });
            }}
            onHeartClick={() => {
              handleFavoriteClick(id, name, isFavorite);
            }}
            onEmptyHeartClick={() => {
              handleFavoriteClick(id, name, isFavorite);
            }}
            isLoading={false}
          />
        ); 
      })};
    </>
  );
};
