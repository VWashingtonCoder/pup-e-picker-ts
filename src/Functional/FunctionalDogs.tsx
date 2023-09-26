import { DogCard } from "../Shared/DogCard";
import { Dog } from "../types";

type FunctionalDogsProps = {
  dogs: Dog[];
};

export const FunctionalDogs = ({ dogs }: FunctionalDogsProps) => {
  return (
    <>
      {dogs.map((dog) => {
        return (
          <DogCard
            dog={dog}
            key={dog.id}
            onTrashIconClick={() => {
              alert("clicked trash");
            }}
            onHeartClick={() => {
              alert("clicked heart");
            }}
            onEmptyHeartClick={() => {
              alert("clicked empty heart");
            }}
            isLoading={false}
          />
        );
      })};
    </>
  );
};
