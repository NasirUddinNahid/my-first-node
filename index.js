const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Alhamdulillah')
});
const users = [
    { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" },
    { "id": 2, "name": "nahid Graham", "username": "Bret", "email": "nahid@april.biz" },
    { "id": 3, "name": "sahid Graham", "username": "Bret", "email": "sahid@april.biz" },
    { "id": 4, "name": "kansu Graham", "username": "Bret", "email": "kansu@april.biz" },
    { "id": 5, "name": "utli Graham", "username": "Bret", "email": "utli@april.biz" },
    { "id": 6, "name": "titly Graham", "username": "Bret", "email": "titly@april.biz" },
    { "id": 7, "name": "tukku Graham", "username": "Bret", "email": "tukku@april.biz" }
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }

});
///////////normal system
// app.get('/users/:gg', (req, res) => {
//     console.log(req.params);
//     const id = req.params.gg;
//     const user = users[id]
//     res.send(user);
// });

//////////////perfect system

// app.get('/users/:gg', (req, res) => {
//     console.log(req.params);
//     const id = parseInt( req.params.gg);
//     const user = users.find(u => u.id === id);
//     res.send(user);
// });

app.get('/users/:gh', (req, res) => {
    const id = parseInt(req.params.gh);
    const user = users.find(r => r.id === id);
    res.send(user);
});


// app.listen(port, () => {
//     console.log(`ALhamdulillah For Everything${port}`)
// })


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});