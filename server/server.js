'use strict'

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// arguable
app.set('port', port)

app.use(express.static('client'))

app.get('/api/title', (req,res) => {
	res.json({ title: 'World!' })
})

app.listen(port, () => {
	console.log('now listening on port', port)
})