var express = require('express');
var app = express();

// Heroku
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.json({
        message: "Hello World!"
    });
});

app.listen(app.get('port'), function() {
  console.log('HelloWorld App is running on port', app.get('port'));
});
