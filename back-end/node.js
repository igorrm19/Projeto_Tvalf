import express from 'express';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const app = express();
app.use(express.json()); //por padrao express n usa json, precissa disso
let port = 3000;


const users = [];

app.post('/ususarios', async (req, res) => {

   await prisma.user.create({
        data: {

            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    //adiciona ao final de uma lista as informações json, para um array vazio
    res.status(201).send("Deu certo! ")
})


app.get('/ususarios', async(req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
});

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port);
});



//MongoDB
//usuario:  igorrodriguesmachado23
//senha:  uTuWGKGkM8qqUQM0
