/*

Implementando um CRUD com Express

*/

const express = require('express');

const server = express();

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

let usuarios = [{
    id: 01,
    nome: "Allan",
    sobrenome: "Bezerra"
},
{
    id: 02,
    nome: "Maria",
    sobrenome: "das Graças"
}]

    /* Fazendo um READ simples com rota estática */
server.get('/', (req, res) => {
    res.send('Você está na minha página de teste, parabéns!')
})
    /* Fazendo um READ simples com rota estática */

server.get('/usuarios', (req, res) => {
    res.send(usuarios)
})
    /* Fazendo um READ simples com rota e captura de parâmetros */

server.get('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const aux = usuarios.find((usuario) => usuario.id == id)
        res.send(aux);
});
    /* Fazendo um CREATE para criar um novo usuário */

server.post('/usuarios', jsonParser, (req, res) => {
    const novoUsuario = req.body
    usuarios.push(novoUsuario)
    res.send(usuarios)
});
    /* Fazendo um DELETE para excluir dados existentes */
server.delete('/usuarios/:index', (req, res) => {
    const {index} = req.params
    usuarios.splice(index, 1)
    res.send(usuarios)
})

/*server.get('/:index', (req, res) => {
    const {index} = req.params

    const aux = usuarios[index]
    res.send(aux);
})
*/


console.log("Servidor funcionando!");

server.listen(3000);