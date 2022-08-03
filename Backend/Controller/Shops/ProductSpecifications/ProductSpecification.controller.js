const conn = require("../../../Model/Model");

const productSpecification_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM  product_specification";
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

const productSpecification_post = async (req, res) => {
  try {
    let data = req.body;
    const sqlquery = "INSERT INTO  product_specification SET ?";
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


const productSpecification_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.id];
    const sqlquery = "UPDATE product_specification SET ? WHERE  id=? ";
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


const productSpecification_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM product_specification WHERE  id=?";
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



module.exports = {productSpecification_get,productSpecification_post, productSpecification_patch, productSpecification_delete };
