var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544s', function(err, data) {
  if (err) console.log(err) // do something
  var body = JSON.parse(data.body)
  console.log(body.id)
  document.body.innerHTML = example({ name: "Space", satID: "Satellite ID: "+ body.id });
})
