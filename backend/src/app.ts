import express from "express";
import 'express-async-errors';
import { tokenRouter } from "./api/token.routes"
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/", tokenRouter)


// Error handler middleware
app.use(errorHandler)

export { app }