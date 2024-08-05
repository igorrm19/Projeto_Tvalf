import express from 'express';

const app = express();


var texto = "hello word";


var html = {   1:`<h1>${texto}</h1>`, 
               2: `<br>`,
               3:`<p>${texto}</p>`
             };
      

app.get('/adimin', (req, res) => {

    res.send(html[1] + html[2] + html[3] + html[2]);
});


console.log(html[3])








const estado = ["mg", "ba"];


for(let es of estado){
    console.log('estado brasileiro ' + es.toUpperCase())
}

