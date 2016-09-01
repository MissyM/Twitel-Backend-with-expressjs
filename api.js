var express = require('express')
var bodyParser = require('body-parser')//Nos permite ver el cuerpo del mensaje en formato JSON
var app = express()
var cors = require('cors')

var twils = []


app.use(bodyParser.json())
app.use(cors())


app.get('/twils', function(req, res) {
	res.json({twils: twils})
})

app.get('/twils/:id', function(req, res) {
	if (twils[req.params.id]) {
		res.json(twils[req.params.id])
	} else {
		res.json({msg: 'El twil no se encuentra'})
	}
})

app.post('/twils', function(req, res) {
	twils.push(req.body)
	res.json({msg: 'Guardado Exitosamente!!!'})
})


app.listen(80)
