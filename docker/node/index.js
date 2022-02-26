const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;

function createTable(connection) {
    const sql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL auto_increment, name varchar(255) NOT NULL, primary key (id));`;
    connection.query(sql);
};

function insertPeople(connection) {
    const sql = `INSERT INTO people(name) VALUES('Giovanni')`;
    connection.query(sql);
}

app.get('/', (req, res) => {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb',
    };

    const connection = mysql.createConnection(config);

    createTable(connection);

    insertPeople(connection);

    const sql = 'SELECT * FROM people';
    connection.query(sql, (err, results) => {
        if (err) console.error(err);

        res.send(
            `<h1>Full Cycle Rocks!</h1><br>
            <table>
            <tr><th>Id</th><th>Name</th></tr>
            ${results.map(person => `<tr><td>${person.id}</td><td>${person.name}</td></tr>`).join('')}
            </table>`
        );
    });
    connection.end();
});

app.listen(port);

console.info(`Server running at http://localhost:${port}`);
