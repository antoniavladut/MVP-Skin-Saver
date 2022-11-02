const db = require('../model/helper');

var express = require('express');
var router = express.Router();

 function makeWhereFromFilters(q) {
   let filters = [];
 
   if (q.skinType) {
       filters.push(`skinType = '${q.skinType}'`);
   }
   if (q.expense) {
       filters.push(`expense = '${q.expense}'`);
   }
   return filters.join(' AND ');
 };


router.get('/', async (req, res) => {
   let sql = 'SELECT * FROM products';  
   let where = makeWhereFromFilters(req.query);
   if (where) {
       sql += ` WHERE ${where}`;
     }
     try {
          let result = await db(sql);    
         res.status(200).send(result.data);  
      } catch(err) {
              res.status(500).send({error: err.message})
         }
        });
 

module.exports = router;