import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/projectRoutes.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(morgan("dev"));
app.use(router);

app.listen(3000, () => {
  console.log(`Servidor corriendo en el puerto 3000`);
});
