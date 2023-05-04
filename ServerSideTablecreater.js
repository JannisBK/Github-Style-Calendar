var mysql = require('mysql');
const http = require('http');
const fs = require('fs');
const path = require('path');



//Creates Server to run on localhost
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        const readStream = fs.createReadStream(filePath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Set Content-Type header
        readStream.pipe(res);

    } else if (req.url === '/data') {
        //Creates connection to mysql Database
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: ' ',
            database: `github-style calendar`
        });

        connection.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');
        });

        //It creates an Array with all the programmiert entrys
        connection.query('SELECT programmiert FROM `github-style calendar 2023 informatik`', (error, results, fields) => {
            if (error) throw error;
            const columnData = results.map(result => result.programmiert);
            console.log(columnData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(columnData));
            res.end();
        });
        connection.end();
    } else if (req.url === '/data2') {
        //Creates connection to mysql Database
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: ' ',
            database: `github-style calendar`
        });

        connection.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');
        });

        //
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                console.log(data);
                console.log(data.data[0])
                console.log(data.data[1])
                var sql = "UPDATE `github-style calendar 2023 informatik` SET programmiert = " + "'" + data.data[0] + "'" + " WHERE date = " + "'" + data.data[1] + "'";
                console.log(sql)
                connection.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                });
                // Do something with the data, e.g. save to a database
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ success: true }));
                res.end();
            } catch (error) {
                console.error('Error parsing JSON:', error);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ success: false, error: 'Error parsing JSON' }));
                res.end();
            }
        });

    } else if (req.url.startsWith('/styles/')) {
        const filePath = path.join(__dirname, 'public', req.url);
        const readStream = fs.createReadStream(filePath, 'utf8');
        readStream.pipe(res);

    } else if (req.url.startsWith('/scripts/')) {
        const filePath = path.join(__dirname, 'public', req.url);
        const readStream = fs.createReadStream(filePath, 'utf8');
        readStream.pipe(res);

    } else {
        res.writeHead(404);
        res.write('File not found!');
        res.end();
    }
});

server.listen(8000);
console.log('Server is running on port 8000');
