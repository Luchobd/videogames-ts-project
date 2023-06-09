import { PlatformElement, Genre } from "./videogames.interface";

export interface Videogame {
  idVideogame: number;
  name: string;
  description: string;
  background_image: string;
  released: string;
  rating: number;
  platforms: PlatformElement[];
  genres: Genre[];
  createdInDb: boolean;
}
