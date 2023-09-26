import { DogCard } from "../Shared/DogCard";
import { Dog } from "../types";
import { Requests } from "../api";

type FunctionalDogsProps = {
  dogs: Dog[];
  refreshDogs: () => void;
};

export const FunctionalDogs = ({ dogs, refreshDogs }: FunctionalDogsProps) => {
  const { deleteDog, updateDog } = Requests;

  return (
    <>
      {dogs.map((dog) => (
        <DogCard
          dog={dog}
          key={dog.id}
          onTrashIconClick={() => {
            deleteDog(dog.id).then(() => {
              refreshDogs();
              alert(`deleted dog: ${dog.name}`);
            });
          }}
          onHeartClick={() => {
            updateDog(dog.id, false).then(() => {
              refreshDogs();
              alert(`unfavorited dog: ${dog.name}`);
            });
          }}
          onEmptyHeartClick={() => {
            updateDog(dog.id, true).then(() => {
              refreshDogs();
              alert(`favorited dog: ${dog.name}`);
            });
          }}
          isLoading={false}
        />
      ))}
      ;
    </>
  );
};
