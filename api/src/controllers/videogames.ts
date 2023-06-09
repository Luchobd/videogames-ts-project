import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import VideogameModel from "../models/Videogame";

// Videogames All and Query
export const getVideogamesDb = async (req: Request, res: Response) => {
  const name = req.query.name as string;
  try {
    const videogameResult = await VideogameModel.find({}).populate("genres");

    if (name) {
      interface filterNameInterface {
        name: string;
      }

      let videoGameName = videogameResult.filter((game: filterNameInterface) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );

      videoGameName.length
        ? res.status(200).send(videoGameName)
        : res.status(200).send(["Game not found"]);
    } else {
      res.status(200).send(videogameResult);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

// Videogames Create
export const saveVideogamesDb = async (req: Request, res: Response) => {
  try {
    const apiVideogames = req.body;

    const createVideogame = await VideogameModel.create(apiVideogames);
    res.status(200).send(createVideogame);
  } catch (error) {
    res.status(404).send(error);
  }
};

// Videogame by ID
export const getVideogameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const videogamesID = await VideogameModel.findById(id).populate("genres");

  if (videogamesID) {
    res.status(200).send(videogamesID);
  } else {
    res.status(404).send({ msg: "Error not found" });
  }
};

// PUT
export const upDateVideogameDb = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    description,
    released,
    rating,
    platforms,
    background_image,
    genres,
  } = req.body;

  try {
    const updateVideogame = await VideogameModel.findByIdAndUpdate(
      { _id: id },
      {
        name,
        description,
        released,
        rating,
        platforms,
        background_image,
        genres,
      },
      { new: true }
    );

    res.status(200).send(updateVideogame);
  } catch (error) {
    res.status(404).send(error);
  }
};

// Videogame Delete
export const deleteVideogameDb = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteVideogame = await VideogameModel.findByIdAndDelete({ _id: id }); await VideogameModel.remove({ _id: id });

    return res.status(200).send({ msg: "Videogame deleted" });
  } catch (error) {
    res.status(404).send("Not Found");
  }
};
