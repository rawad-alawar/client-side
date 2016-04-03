var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('http://localhost:3000/v1/cats', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" });
})
