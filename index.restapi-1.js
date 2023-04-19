import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { Ok200, gatwayError500 } from "./status.js";

// file
import fs from "fs";

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

// app.get("/users", (request, response)=> {
//   const html = `
//     <ul>
//     ${users.map((item)=>`<li> ${item.first_name} </li>`).join("")}
//     </ul>
//   `
//   response.send(html)
// })

app.get("/api/users", (request, response)=> {
  return response.json(users);
})

app.get("/api/users/:id", (request, response)=> {
  const id = Number(request.params.id);

  if (Number.isInteger(id)) {
    const user = users.find((user)=> user.id === id);
    response.json(user)
  }else{
    response.status(gatwayError500).json("Invalid Id... pass integer only")
  }

  
})

// app.post("/api/users", (request, response)=> {
//   fs.writeFile("./text.json", JSON.stringify(request.body), (error, data)=>{
//     return response.status(Ok200).json({
//       success: true,
//       message : data
//     })
//   });
// })

app.post("/api/users", (request, response)=> {
  users.push({...request.body, id : users.length + 1})
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data)=>{
    return response.status(Ok200).json({
      success: true,
      message : data,
      id : users.length + 1
    })
  });
})





app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
