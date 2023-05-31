const client = require('../model/connection');
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';

async function login(req, res) {
    const id = JSON.parse(req.params.id);
    const pwd = JSON.parse(req.params.pwd);
    const user = await client.db('Users').collection('user').findOne({
        _id: id,
        password: pwd
    })
    jwt.sign({user}, secretKey, {expiresIn:'3000s'}, (err, token)=>{
        res.send(JSON.stringify(token));
    });
}

async function register(req, res) {
    console.log('register api called');
    const user = {
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        age: req.body.age,
        password: req.body.password,
    }
    const flag = await client.db('Users').collection('user').insertOne(user);
}


async function userInfo(req, res) {
    console.log('userInfo api called');
    const userID = JSON.parse(req.params.userID);
    const userToken = JSON.parse(req.params.userToken);
    const user = await client.db('Users').collection('user').findOne({
        _id: userID
    })
    res.send(user)
}
module.exports = { login, register, userInfo }