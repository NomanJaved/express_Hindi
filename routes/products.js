var express = require('express');
var router = express.Router();

var db = require('../db');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({'extended:true'}));


/* GET products listing. */
router.get('/', function(req, res, next) {
  var query = 'select * from products';
  db.query(query, function(err, rows, fields){
    if(err){
      res.status(500).send({error: 'Some thing failed.'});
    }
    // res.render("index");
    res.json(rows);
  });
  // res.send('respond with a resource');
});

/*get method for fetch single product*/
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var query = `select * from products where id = ${id}` ;
  db.query(query, function(err, row, fields){
    if(err){
      res.status(500).send({error: 'Some thing failed.'});
    }
    // res.render("index");
    res.json(row[0]);
  });
  // res.send('respond with a resource');
});

router.post('/create', function(req, res){

  console.log('hello');
  res.send({ hello: 'world' });
  // console.log(req.body);
  // var name = req.body.name;
  // var sku = req.body.sku;
  // var price = req.body.price;

  // console.log(name);
  // console.log(sku);
  // console.log(price);


  // var sql = 'insert into products (name, sku, price, active, created_at) values("${name}", "${sku}", "${price}", 1, NOW() )';
  // db.query(sql, function(error, result){
  //   if(error) {
  //     res.status(500).send({error: 'Some thing failed.'});
  //   }
  //   res.json({status: 'success', id : result.insertId});
  // })
});

router.put('/update/:id', function(request, response, next){
  // var id = request.params.id;
  // var name = req.body.name;
  // var sku = req.body.sku;
  // var price = req.body.price;
  // var sql = "update products SET name="${name}", sku="${sku}", price="${price}" where id = "${id}" ";
  // db.query(sql, function(error, result){
  //   if(error){
  //     response.status(500).send({error: 'Some thing failed.'});
  //   }
  //   res.json({status: 'success'});

  // })
})

router.delete('/delete/:id', function(request, response, next){
  // var id = request.params.id;
  // var sql = "delete from products where id = "${id}" ";
  // db.query(sql, function(error, result){
  //   if(error){
  //     response.status(500).send({error: 'Some thing failed.'});
  //   }
  //   res.json({status: 'success'});

  // })
})


module.exports = router;
