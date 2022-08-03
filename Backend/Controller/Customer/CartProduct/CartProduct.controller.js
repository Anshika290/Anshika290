const conn = require("../../../Model/Model");

const CartProduct_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM cart_products";
    await conn.query(sqlquery, (err, result) => {
      if (err) {
        res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const CartProduct_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO cart_products SET ?";
  await conn.query(sqlquery, data, (err, result) => {
    if (err) {
      res.send({error: err.sqlMessage});
    }
    res.json({status: 200, response: result});
  });

}catch (err) {
    res.json({ error: err.message });
  }
}


const CartProduct_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.cart_id];
    const sqlquery = "UPDATE  cart_products SET ? WHERE  cart_id=? ";
    await conn.query(sqlquery, data, (err, result) => {
      if (err) {
        res.send({ error: err.sqlMessage });
      }
      res.json({status: 200, response: result});
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};


const CartProduct_delete = async (req, res) => {
  try {
    let data = [req.params.cart_id];
    const sqlquery = "DELETE FROM  cart_products WHERE  cart_id=?";
    await conn.query(sqlquery, data, (err, result) => {
      if (err) {
        res.send({ error: err.sqlMessage });
      }
      res.json({status: 200, response: result});
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};


module.exports = { CartProduct_get, CartProduct_post, CartProduct_patch, CartProduct_delete };
