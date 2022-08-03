const conn = require("../../../Model/Model");

const productInventery_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM  product_inventory";
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

const productInventery_post = async (req, res) => {
  try {
    let data = req.body;
    const sqlquery = "INSERT INTO  product_inventory SET ?";
    await conn.query(sqlquery, data, (err, result) => {
      if (err) {
        res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};


const productInventery_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.id];
    const sqlquery = "UPDATE product_inventory SET ? WHERE  id=? ";
    await conn.query(sqlquery, data, (err, result) => {
      if (err) {
        res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};


const productInventery_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM product_inventory WHERE  id=?";
    await conn.query(sqlquery, data, (err, result) => {
      if (err) {
        res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};



module.exports = {productInventery_get,productInventery_post, productInventery_patch, productInventery_delete };
