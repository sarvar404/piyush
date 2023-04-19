import cluster from "node:cluster";
import os from "os";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const totalCPUs = os.cpus().length;
const PORT = process.env.PORT;

// console.log(totalCPUs, "total cpus");

if (cluster.isPrimary) {


  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }


} else {


  app.get("/", (request, response) => {
    response.status(200).json({
      message: `API created successfully ${process.pid}`,
    });
  });



  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });

//   console.log(`Worker ${process.pid} started`);
}
