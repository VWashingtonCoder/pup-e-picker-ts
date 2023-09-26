import { ReactNode } from "react";
// Add your own custom types in here
export type Dog = {
  id: number;
  name: string;
  description: string;
  image: string;
  isFavorite: boolean;
};

export type SectionProps = {
  children: ReactNode;
  view: string;
  favoriteCount: number;
  unfavoriteCount: number;
  changeView: (view: string) => void;
};

export type DogsProps = {
  dogs: Dog[];
  refreshDogs: () => void;
};