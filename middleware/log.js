// creating log for checking request type

import fs from "fs";


const LogReqRes = (filename) => {

    const currentDate = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});

    return (request, response, next) => {

        if (fs.existsSync(filename)) {
            fs.appendFile(
                filename,
              `${currentDate}: IP ${request.ip} : ${request.method} : ${
                request.path
              } \n : Body => ${JSON.stringify(request.body)} \n\n`,
              (error, data) => {
                next(); 
              }
            );
          } else {
            fs.writeFile(
                filename,
              `${currentDate}: IP ${request.ip} : ${request.method} : ${request.path}`,
              (error, data) => {
                next();
              }
            );
          }
    }
  
};

export {LogReqRes}
