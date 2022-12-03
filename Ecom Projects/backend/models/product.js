const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('Product', { 
    Key:{
      type:Sequelize.STRING,
      allowNull:false,
      primaryKey: true,
      autoIncrement:true
    },
    Title: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    Url: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    Price: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    Discription:{
        type:Sequelize.STRING,
    }
  });
  
  module.exports = Product;