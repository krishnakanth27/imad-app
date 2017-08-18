var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
                         'first-article' : {
                         title: 'first-article' ,
                         date: '18th september' ,
                         heading:'yo, i make things.' ,
                         content: 'gotta pursue a career in It sector for sure and make lots and lots of money for my family.see ya after making some.'
                                         },
                          
                          'second-article' : {
                         title: 'second-article' ,
                         date: '17th september' ,
                         heading:'rockstar kittu is my name' ,
                         content: ' making money is my game'
                                          }                
                        
                 };

function createhtml (data) {
var title =data.title ;   
var date =data.date;
var heading =data.heading;
var content =data.content;


var htmltemplate = `
 
 <html> 
     <head>
         <title>
           ${title}
         </title>  
       <link href=/ui/style.css rel="stylesheet" />
      </head>
      <body>
            <div class="container">
                <div>
                <a href='\'>back</a>
                </div>
                <hr/>
            <h4>
               ${date}
            </h4>
            <div>
                <p>
                    ${heading}
                </p>
                <p>
                    ${content}
                </p>
            </div>
      </div>
      </body>

<html>
    
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName' , function (req, res) {
  var articleName = req.params.articleName ;
  res.send(createhtml(articles[articleName])); 

  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
