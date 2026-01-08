const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "hM8wjYYI#eKgPZvif8z3e5_a56d4kZanQmrlMOs23vKg27GLzhUY",
  MONGODB: process.env.MONGODB || "mongodb://mongo:uxFPCLlTDJpoAAfwHjiIbTFSlqOrbMhR@crossover.proxy.rlwy.net:33417",
  OWNER_NUM: process.env.OWNER_NUM || "94787791638",
};
