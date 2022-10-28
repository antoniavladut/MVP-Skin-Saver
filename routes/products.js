const db = require('../model/helper');
//now we can use db function

var express = require('express');
var router = express.Router();
//this means we will use express

/* GET products listing. */
// router.get('/', async function (req, res, next) {
//    let sql = "SELECT * FROM products";
//    try {
//     //checking if we can get a response with this sql command, and if yes, we are storing in response
//     //response = obj with many properties (ok, data, etc)
//     let response = await db(sql);
//     //.ok only for fetch
//     //rename to result
    
//    res.status(200).send(response.data);
 
//    } catch(err) {
//         res.status(500).send({error: err.message})
//    }
//   });


  //get by id
  //create a get with filter
//   select all from products where type = oily


/*
Using query parameters to filter a "GET all" route

This URL:
    GET /cats?breed=manx&maxAge=5
Will generate this SQL:
    SELECT * FROM cats WHERE breed = 'manx' AND age <= 5;
*/



/**
 * Helpers - is this where it should go?
 **/

 function makeWhereFromFilters(q) {
   let filters = [];
 
   //was skintype passed as a filter?
   if (q.skinType) {
      //will become part of the SQL
      //skintype = column name from table
       filters.push(`skinType = '${q.skinType}'`);
   }
   if (q.expense) {
       filters.push(`expense = '${q.expense}'`);
   }
 
   // Return all filters joined by AND
   return filters.join(' AND ');
 };


/**
* Routes
**/

// GET all cats (with optional filter)
router.get('/', async (req, res) => {
   let sql = 'SELECT * FROM products';  // all SELECTs begin with this...
   let where = makeWhereFromFilters(req.query);  // make optional WHERE-part from query parameters
   // If query parameters were passed, append them to the SELECT statement
   if (where) {
       sql += ` WHERE ${where}`;
   }
   try {
          let result = await db(sql);
          //.ok only for fetch
          //rename to result
          
         res.status(200).send(result.data);
       
         } catch(err) {
              res.status(500).send({error: err.message})
         }
        });


  //then try to fetch data from front end

  //take the form and get something from back end
  
  module.exports = router;