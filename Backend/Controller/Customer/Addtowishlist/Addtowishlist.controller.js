const conn = require("../../../Model/Model");

const AddToWishList_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM wishlist";
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

const AddToWishList_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO wishlist SET ?";
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


const AddToWishList_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.product_id];
    const sqlquery = "UPDATE  wishlist SET ? WHERE  product_id=? ";
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


const AddToWishList_delete = async (req, res) => {
  try {
    let data = [req.params.product_id];
    const sqlquery = "DELETE FROM  wishlist WHERE  product_id=?";
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


module.exports = { AddToWishList_get, AddToWishList_post, AddToWishList_patch, AddToWishList_delete };
