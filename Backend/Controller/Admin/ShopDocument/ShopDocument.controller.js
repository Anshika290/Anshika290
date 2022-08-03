const conn = require("../../../Model/Model");


let shopDocument_get= async(req, res) => {
  try{
  const sqlquery = "SELECT * FROM shop_documents";
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

let shopDocument_post = (req, res) => {
  let data = req.body;
  let sqlquery = "INSERT INTO shop_documents SET ?";
  let query = conn.query(sqlquery, data, (err, result, field) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, response: result }));
  });
};

const shopDocument_patch = async (req, res) => {
  try {
    let data = [req.body,req.params.shop_id];
    const sqlquery = "UPDATE  shop_documents SET ? WHERE  shop_id=? ";
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


const shopDocument_delete = async (req, res) => {
  try {
    let data = [req.params.shop_id];
    const sqlquery = "DELETE FROM  shop_documents WHERE  shop_id=?";
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



module.exports = {shopDocument_get,shopDocument_post,shopDocument_patch,shopDocument_delete};
