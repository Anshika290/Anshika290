const conn = require("../../../Model/Model");

const product_category_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM product_category";
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

const product_category_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO product_category SET ?";
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


const product_category_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.id];
    const sqlquery = "UPDATE product_category SET ? WHERE id=? ";
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


const product_category_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM  product_category WHERE id=?";
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


module.exports = { product_category_get, product_category_post,product_category_patch,product_category_delete };
