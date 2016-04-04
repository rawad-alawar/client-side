var xhr = require('xhr')
var example = require('./views/example.hbs')

button.addEventListener("click", function(){ alert("something"); return false; },false);
xhr.get('https://api.wheretheiss.at/v1/satellites/25544s', function(err, data) {
  if (err) console.log(err) // do something
  var body = JSON.parse(data.body)
  var button = document.getElementById("displayButton")
  document.body.innerHTML = example({ name: "Space", satID: "Satellite ID: "+ body.id, lat: "Latitude: "+ body.latitude, lon: "Longitude: "+ body.longitude, image: "http://static.bangordailynews.com/wp-content/blogs.dir/344/files/2015/10/iss.jpeg?strip=all?ref=inline", alt: body.altitude });
})
