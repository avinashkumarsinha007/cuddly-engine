const app = require("./index.js");

const connect = require("./config/db");

app.listen("4000", async (res,req) => {
    await connect();
    console.log("port 4000");
})