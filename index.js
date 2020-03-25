const app = require ('./bin/express');
//const port= 3333;
//const questions = require ('./module/questionSchema')
const routerQuiz = require ('./module/router')
const cors = require('cors');

app.get( '/', async (req,res) => {
 res.send('funcionando')
})
app.use(cors);
app.use('/api',routerQuiz)

//app.use(bodyParser.json)


/*
app.get( '/', async (req,res) => {
    const all = await questions.find()

    res.json(all);
})
/*
app.get( '/inserir', async (req,res) => {
    //res.status(200).send('ola mundo');
    const pk = await questions.create({
        asks:"Memória RAM",
        opa:"Armazena para sempre",
        opb:"Armazena temporária",
        opc:"Armazena enquanto seu equipamento está ligado",
        opd:"Armazena",
        
        correct:"C",
    });
    const all = await questions.find()
    res.json(all);
    //res.status(200).send(res.json(all))
})

*/
//server.connection({ port: process.env.PORT || 3000 }); 
app.listen(process.env.PORT || 3000)