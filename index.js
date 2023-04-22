import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// log importing
const path = './log.html';
import { LogReqRes } from "./middleware/log.js";
import Connection from "./db/DB.js";


dotenv.config();
// created express
const app = express();
const PORT = process.env.PORT;



// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(LogReqRes(path))


app.post("/api/testing", (request, response) => {
  response.send(request.body);
})






app.listen(PORT, () => {
  Connection();
  console.log(`Server started at http://localhost:${PORT}`);
});
