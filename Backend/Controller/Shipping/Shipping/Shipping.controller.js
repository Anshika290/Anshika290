const conn = require("../../../Model/Model");

const shipping_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM  shipping";
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

const shipping_post = async (req, res) => {
  try {
    let data = req.body;
    const sqlquery = "INSERT INTO  shipping SET ?";
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


const shipping_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.id];
    const sqlquery = "UPDATE shipping SET ? WHERE  id=? ";
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


const shipping_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM shipping WHERE id=?";
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


module.exports = {shipping_get,shipping_post, shipping_patch, shipping_delete };
