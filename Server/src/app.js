const express = require("express");
const app = express ();

const mainRouter = require("./routes/mainRoutes")

app.use("/", mainRouter)

const port = process.env.port || 3005;
app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));