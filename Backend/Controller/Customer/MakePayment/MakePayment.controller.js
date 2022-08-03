const conn = require("../../../Model/Model");

const payment_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM payment";
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

const payment_post = async(req, res) => {
    try{
  let data = req.body;
  const sqlquery = "INSERT INTO payment SET ?";
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


const payment_patch = async (req, res) => {
  try {
    let data = [req.body,req.params. transaction_id];
    const sqlquery = "UPDATE payment SET ? WHERE   transaction_id=? ";
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


const payment_delete = async (req, res) => {
  try {
    let data = [req.params. transaction_id];
    const sqlquery = "DELETE FROM payment WHERE   transaction_id=?";
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


module.exports = { payment_get, payment_post, payment_patch, payment_delete };
