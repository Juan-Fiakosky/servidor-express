const express = require("express");

const { deportes } = require("../datos/juegos.js").infoJuegos;

const routerDeportes = express.Router();

// Middleware
routerDeportes.use(express.json());

routerDeportes.get("/", (req, res) => {
	res.send(JSON.stringify(deportes));
});

routerDeportes.post("/", (req, res) => {
	let juegoNuevo = req.body;
	deportes.push(juegoNuevo);
	res.send(JSON.stringify(deportes));
});

// PUT
routerDeportes.put("/:id", (req, res) => {
	const juegoActualizado = req.body;
	const id = req.params.id;

	const indice = deportes.findIndex((juego) => juego.id == id);

	if (indice >= 0) {
		deportes[indice] = juegoActualizado;
	}
	res.send(JSON.stringify(deportes));
});

// PATH
routerDeportes.patch("/:id", (req, res) => {
	const infoActualizada = req.body;
	const id = req.params.id;

	const indice = deportes.findIndex((juego) => juego.id == id);

	if (indice >= 0) {
		const juegoAmodificar = deportes[indice];
		Object.assign(juegoAmodificar, infoActualizada);
	}
	res.send(JSON.stringify(deportes));
});

// DELETE
routerDeportes.delete("/:id", (req, res) => {
	const id = req.params.id;

	const indice = deportes.findIndex((juego) => juego.id == id);

	if (indice >= 0) {
		deportes.splice(indice, 1);
	}
	res.send(JSON.stringify(deportes));
});

module.exports = routerDeportes;
