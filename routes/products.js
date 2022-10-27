const db = require('../model/helper');
//now we can use db function

var express = require('express');
var router = express.Router();
//this means we will use express

/* GET products listing. */
router.get('/', async function (req, res, next) {
   let sql = "SELECT * FROM products";
   try {
    //checking if we can get a response with this sql command, and if yes, we are storing in response
    //response = obj with many properties (ok, data, etc)
    let response = await db(sql);
    if (response.ok){
       res.status(200).send(response.data);
    } else {
        res.status(404).send({error: "Product not found"});
    }
   } catch(err) {
        res.status(500).send({error: err.message})
   }
  });


  //get by id
  //create a get with filter
//   select all from products where type = oily
  //then try to fetch data from front end

  //take the form and get something from back end
  
  module.exports = router;