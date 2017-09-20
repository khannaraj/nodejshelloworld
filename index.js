var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))

app.get('/', function(request, response) {
  response.send('<h2>Hello NodeJS World!</h2>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
