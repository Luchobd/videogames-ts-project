import { createContext } from "react";
import { VideogamesContent, VideogamesState } from '../../interfaces/videogames.interface';

export type GameContextProps = {
  videogames: VideogamesContent[];
  getVideogames: () => void;
}

const GameContext = createContext<GameContextProps>({} as GameContextProps);

export default GameContext