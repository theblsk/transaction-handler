import express from "express";
import cors from "cors";
import appRoutes from "./src/Routes/routes.ts";
import mongoose from "mongoose";

const connectioUrl = process.env.CONNECTION_URL;

if (!connectioUrl) {
    throw new Error("Please define the MONGODB connection url");
}

const db = await mongoose.connect(connectioUrl);

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.port || 4000;

app.use("/", appRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

