import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//importing fake - data
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const users = require("./MOCK_DATA.json")






dotenv.config();
// created express
const app = express();
const PORT = process.env.PORT;



// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



// API CREATION
app.get("/api", (request, response) => {
  response.status(200).json({
    message: `API created successfully ${process.pid}`,
  });
});



app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
