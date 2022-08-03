const conn = require("../../../Model/Model");

const Review_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM review";
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

const Review_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO review SET ?";
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


const Review_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.customer_id];
    const sqlquery = "UPDATE review SET ? WHERE   customer_id=? ";
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


const Review_delete = async (req, res) => {
  try {
    let data = [req.params.customer_id];
    const sqlquery = "DELETE FROM review WHERE   customer_id=?";
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


module.exports = { Review_get, Review_post, Review_patch, Review_delete };
