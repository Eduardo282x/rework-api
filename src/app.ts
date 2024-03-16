import express from "express";
import morgan from "morgan";
import cors from "cors";
// import apiRouter from "./routes/api.routes";

const app = express();

//Settings
app.set("port", 3004);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Routes
// app.use('/api', apiRouter);
app.get('/', (req,res) => {
    res.send('hola');
})

export default app;