'use strict'

const express = require('express')
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meanchat'

const app = express()
const port = process.env.PORT || 3000

// arguable
app.set('port', port)

app.use(express.static('client'))

app.get('/api/title', (req,res) => {
	res.json({ title: 'Mean Chat!' })
})

const Message = mongoose.model('message', {
	author: String,
	message: String
})

app.get('/api/messages', (req, res, err) => {
	Message
		.find()
		.then( messages => res.json({ messages }))
		.catch(err)
})

mongoose.promise = Promise
mongoose.connect(MONGODB_URL, () =>
	app.listen(port, () => {
		console.log('now listening on port', port)
	})
)