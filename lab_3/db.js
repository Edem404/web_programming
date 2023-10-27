const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "web_lab",
        password: "romko1377"
    }
)

connection.connect(function(error) {
    if (error) {
        return console.error("alarm" + error.message);
    } else {
        console.log("OK")
    }
})

connection.execute("SELECT * FROM table1", function (error, results) {
    console.log(error);
    console.log(results);
})



module.exports = connection;