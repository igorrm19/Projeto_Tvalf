import express from 'express';

const app = express();
app.use(express.json()); //por padrao express n usa json, precissa disso
let port = 3000;


const users = [];

app.post('/ususarios', (req, res) => {

    users.push(req.body) //adiciona ao final de uma lista as informações json, para um array vazio
    res.status(201).send("Deu certo! ")
})


app.get('/ususarios', (req, res) => {
    res.status(200).json(users)
});

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port);
});



//MongoDB
//usuario:  igorrodriguesmachado23
//senha:  uTuWGKGkM8qqUQM0
