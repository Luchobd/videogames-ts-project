import { GET_VIDEOGAMES } from "../types";
import {
  VideogamesContent,
  VideogamesState,
} from "../../interfaces/videogames.interface";

type VideogamesAction = { type: "GET_VIDEOGAMES"; payload: VideogamesContent };

export const VideogamesReducer = (
  state: VideogamesState,
  action: VideogamesAction
): VideogamesState => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: [...state.videogames, action.payload],
      };

    default:
      return state;
  }
};
