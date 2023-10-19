require('dotenv').config()
const express = require('express')
const knex =require('./conexao.js')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
	try {
	 const carros = await knex('carros')
	 return res.json(carros)
	} catch (error) {
		console.log(error)
		return res.status(500).json({mensagem:'Erro interno do Servidor'})	
	}

})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})


