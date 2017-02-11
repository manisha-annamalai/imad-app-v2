var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var pages = 
{
    'verse-one' :{
    title:'verse one',
    heading: 'verse of the day',
    date: '9th feb 2017',
    content: ` <p>
                Stay blessed..
            </p>
            <p>
                "For as the heavens are higher than the earth, So are My ways higher than your ways And My thoughts than your thoughts."
            </p>`},
    'verse-two' : {
         title:'verse two',
         heading: 'verse of the day',
         date: '10th feb 2017',
         content: ` <p>
                Stay blessed..
            </p>
            <p>
                "For I am the way, the truth and the life."
            </p>`
                },
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
                   ${title}
                </title>
                <meta name="viewport" content="width=device-width",initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
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

//verseName == verse-one
//pages[verseName] == content of verse-one

app.get('/:verseName', function (req, res) {
    var verseName=req.params.verseName;
    res.send(createTemplate(pages[verseName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
