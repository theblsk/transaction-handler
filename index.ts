import express from "express";
import cors from "cors";
import appRoutes from "./src/Routes/routes.ts";
import mongoose from "mongoose";

const connectioUrl = process.env.CONNECTION_URL; //connection url located in environment variables

if (!connectioUrl) {
  throw new Error("Please define the MONGODB connection url");
}

await mongoose.connect(connectioUrl); // initialize connecting to db

const app = express(); // whole app initialization

app.use(cors());
app.use(express.json());

const port = process.env.port || 4000;

app.use("/", appRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
