import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import {
  start
} from "repl";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on PORT : ${PORT}`));