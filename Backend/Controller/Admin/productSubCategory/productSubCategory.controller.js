const conn = require("../../../Model/Model");

const product_sub_category_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM product_subcategory";
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

const product_sub_category_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO product_subcategory SET ?";
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


const product_sub_category_patch= async (req, res) => {
  try {
    let data = [req.body,req.params.Sub_Category_id];
    const sqlquery = "UPDATE id SET ? WHERE id=? ";
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


const product_sub_category_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM product_subcategory WHERE  id=?";
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


module.exports = { product_sub_category_get, product_sub_category_post, product_sub_category_patch, product_sub_category_delete };
