const conn = require("../../../Model/Model");
const cors = require('cors')

let shopRegistration_get= async(req, res) => {
  try{
  const sqlquery = "SELECT * FROM shop";
  await conn.query(sqlquery, (err, result) => {
    if (err) {
      res.send({ error: err.sqlMessage });
    } 
    res.json({ status: 200, response: result });
    
  })
} catch (err) {
  res.json({ error: err.message });
}
}

let shopRegistration_post = (req, res) => {
  let data = req.body;
  let sqlquery = "INSERT INTO shop SET ?";
  let query = conn.query(sqlquery, data, (err, result, field) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, response: result }));
  });
};

const shopRegistration_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.id];
    const sqlquery = "UPDATE  shop SET ? WHERE  id=? ";
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


const shopRegistration_delete = async (req, res) => {
  try {
    let data = [req.params.id];
    const sqlquery = "DELETE FROM  shop WHERE  id=?";
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



module.exports = {shopRegistration_get,shopRegistration_post,shopRegistration_patch,shopRegistration_delete};
