import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbGenres from "./config/mongo";
const PORT = process.env.PORT ?? 3005;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbGenres().then(() => console.log("Conexion Ready"));

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
