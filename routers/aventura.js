const express = require("express");

const { aventura } = require("../datos/juegos.js").infoJuegos;

const routerAventura = express.Router();

routerAventura.get("/", (req, res) => {
	res.send(JSON.stringify(aventura));
});

// Parametros URL
routerAventura.get("/:consola", (req, res) => {
	const consola = req.params.consola;
	const resultados = infoJuegos.aventura.filter(
		(juego) => juego.consola === consola
	);

	if (resultados.length === 0) {
		return res.status(404).send(`No se encontraron juegos de ${consola} `);
	}

	// Parametros query ordenar
	if (req.query.ordenar === "descargas") {
		return res.send(
			JSON.stringify(resultados.sort((a, b) => a.descargas - b.descargas))
		);
	}
	res.send(JSON.stringify(resultados));
});

module.exports = routerAventura;
