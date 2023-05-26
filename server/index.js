const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = ``
const PORT = process.env.PORT || 3002;


async function connect (){
    try{
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        console.log('Connected to db');
    }catch(error){
        console.log(error)
    }
}
connect();
const restaurantSchem = new mongoose.Schema({name:String});
const Restaurant = mongoose.model('Restauran', restaurantSchem);
Restaurant.createCollection().then(function (collection){
    console.log('collection create');
})

let mcdonalds = new Restaurant({name:'Mcdonalds'})
 mcdonalds.save();


app.get('/api',(req,res)=>{
    res.json({ message: "Hello from server!" });

});



app.listen(PORT, ()=>{
    console.log(`Server listen port 3002`);
})