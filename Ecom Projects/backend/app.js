const express=require('express');

const bodyParser = require('body-parser');

const cors=require('cors');

app.use(cors()); 

app.use(bodyParser.json({ extended: false })); 

const app=express();

app.use('/admin',adminroutes);

sequelize
  .sync() 
  .then(result => {    
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
