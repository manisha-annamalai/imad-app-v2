var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var verse-one = {
    title:'verse one',
    heading: 'verse of the day',
    date: '9th feb 2017',
    content: ` <p>
                Stay blessed..
            </p>
            <p>
                "For as the heavens are higher than the earth, So are My ways higher than your ways And My thoughts than your thoughts."
            </p>`
      };

function createTemplate (data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate= `
<!doctype html>
<html>
    <head>
        <title>
           $ {title}
        </title>
  <meta name="viewport" content="width-device-width,initial-scale=1"/>
   <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            $ {heading}
        </h3>
        <div>
            $ {date}
        </div>
        <div>
           $ {content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/verse-one', function (req, res) {
    res.send(createTemplate(verse-one));
});
app.get('/verse-two', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'verse-two.html'));
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
