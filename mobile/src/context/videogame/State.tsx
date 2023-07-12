import React, { useReducer } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

import GameContext from "./Context";
import { VideogamesReducer } from "./Reducer";

import { GET_VIDEOGAMES } from "../types";
import { VideogamesState } from "../../interfaces/videogames.interface";


interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GameProvider = ({ children }: Props) => {
  const initialState: VideogamesState = {
    videogames: [],
  };

  const [state, dispatch] = useReducer(VideogamesReducer, initialState);

  const getVideogames = async () => {
    try {
      // No se puede hacer el llamado desde local.
      const resp: AxiosResponse = await axios.get(
        "https://videogames-deploy-back.onrender.com/videogames"
      );
      const data = resp.data;
      return dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      return console.log("error", error);
    }
  };

  return (
    <GameContext.Provider
      value={{ videogames: state.videogames, getVideogames }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
