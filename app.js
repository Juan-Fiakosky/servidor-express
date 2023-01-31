const express = require("express");
const app = express();

const { infoJuegos } = require("./datos/juegos.js");

// Routers
const routerAventura = require("./routers/aventura.js");
app.use("/api/juegos/aventura", routerAventura);

const routerDeportes = require("./routers/deportes.js");
app.use("/api/juegos/deportes", routerDeportes);

// Routing
app.get("/", (req, res) => {
	res.send("Mi servidor con Express. Juegos 🕹️💻.");
});

app.get("/api/juegos", (req, res) => {
	res.send(JSON.stringify(infoJuegos));
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
	console.log(`El servidor esta escuchando en el puerto ${PORT}... `);
});
