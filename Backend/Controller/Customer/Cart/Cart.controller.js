const conn = require("../../../Model/Model");

const Cart_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM cart";
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

const Cart_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO cart SET ?";
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


const Cart_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.Cart_id];
    const sqlquery = "UPDATE  cart SET ? WHERE  Cart_id=? ";
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


const Cart_delete = async (req, res) => {
  try {
    let data = [req.params.Cart_id];
    const sqlquery = "DELETE FROM  cart WHERE  Cart_id=?";
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


module.exports = { Cart_get, Cart_post, Cart_patch, Cart_delete };
