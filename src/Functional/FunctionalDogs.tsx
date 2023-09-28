import { DogCard } from "../Shared/DogCard";
import { DogsProps } from "../types";
import { Requests } from "../api";

export const FunctionalDogs = (props: DogsProps) => {
  const { dogs, refreshDogs, isLoading, setLoading } = props;
  const { deleteDog, updateDog } = Requests;

  const handleDeleteClick = (id: number) => {
    setLoading(true);
    deleteDog(id)
      .then(() => {
        refreshDogs();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFavoriteClick = (id: number, isFavorite: boolean) => {
    setLoading(true);
    updateDog(id, !isFavorite)
      .then(() => {
        refreshDogs();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {dogs.map((dog) => {
        const { isFavorite } = dog;
        const id = dog.id || 0;

        return (
          <DogCard
            dog={dog}
            key={id}
            onTrashIconClick={() => handleDeleteClick(id)}
            onHeartClick={() => handleFavoriteClick(id, isFavorite)}
            onEmptyHeartClick={() => handleFavoriteClick(id, isFavorite)}
            isLoading={isLoading}
          />
        );
      })}
      ;
    </>
  );
};
