const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();

const db = mysql.createConnection({
    host: 'containers-us-west-130.railway.app',
    user: 'root',
    password:'bZXwxlmnYg5TcbMv5Vrp',
    database: 'railway',
    port: 6044
    
}) 


const PORT = process.env.PORT || 3002;

app.use(express.json())
app.use(cors());

app.get('/restaurants', (req, res)=>{
    const q = 'SELECT * FROM restaurants';

    db.query(q, (err, data)=>{

        if(err) return res.json(err);

        return res.json(data)
    })

})

app.get('/menu', (req, res)=>{
    const q = 'SELECT * FROM Menu';

    db.query(q, (err, data)=>{
        if(err) return res.json(err);

        return res.json(data)
    })

})

app.get('/history', (req, res, next)=>{
    
    const q = `SELECT * FROM Orders WHERE phone LIKE ? AND email LIKE ? `

    let phone= req.query.phone;
    let email = req.query.email;

    if( phone !== undefined ){
        db.query(q,[phone, email], (err, data, fields) => {
            if(err) return res.json(err);

            return res.json(data);
        })
    }else {
        next();
    }
   

})

app.post('/order', (req, res)=>{
    const q = "INSERT INTO Orders (`name`,`phone`,`email`,`address`,`orderInfo`,`total`) VALUES (?)"
    const value = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.address,
        req.body.orderInfo,
        req.body.total
    ]

    db.query(q,[value], (err, data)=>{
        if(err) return res.json(err);

        return res.json(data)
    })
})






app.listen(PORT, ()=>{
    console.log(`Server listen port ${PORT}`);
})