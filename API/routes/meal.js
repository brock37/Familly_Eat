const express = require('express');
let router = express.Router();
const db = require('../db');

router.get('/', (req, res) =>{
    let sql = "SELECT * FROM meal";
    db.query(sql, (err, results, fields) =>{
        if(err) throw err;
        console.log(fields);
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});


module.exports = router;