import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// files
import fs from "fs";



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


// fs.writeFileSync("./text.txt", "Nothing");
// fs.writeFile("./text.txt", "this is Asyn", (error)=>{});

// const result = fs.readFileSync("./text.txt", "utf8");
// console.log(result) // this is synchronous

// fs.readFile("./text.txt", "utf-8", (err, result)=> {

//   if (err) {

//     console.log("error", err)
    
//   }else {
//     console.log(result)
//   }

// })

fs.appendFileSync("./text.txt", `Hi there \n`);

// fs.cpSync("./text.txt", "./copy.txt",); // it will copy a file
// fs.unlinkSync("./copy.txt"); // it will delete your file

// console.log(fs.statSync("./text.txt")); // to check file details
//console.log(fs.statSync("./text.txt").isFile()); // To check it is a file or not

//fs.mkdirSync("my-docs1"); // it is going to create a directory to you a folder
//fs.mkdirSync("my-docs1/a/b", {recursive : true}); //if you wanted inner folder so 





app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
