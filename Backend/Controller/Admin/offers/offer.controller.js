const conn = require("../../../Model/Model");

const offers_get = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM offers";
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

const offers_post = async (req, res) => {
  try {
    let data = req.body;
    const sqlquery = "INSERT INTO offers SET ?";
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


const offers_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.id];
    const sqlquery = "UPDATE offers SET ? WHERE  id=? ";
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


const offers_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM offers WHERE  id=?";
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




module.exports = { offers_get, offers_post,offers_patch,offers_delete };
