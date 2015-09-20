'use strict';

import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';

let privateKey  = fs.readFileSync('./ssl/trevinhofmann.com.key', 'utf8');
let certificate = fs.readFileSync('./ssl/trevinhofmann.com.crt', 'utf8');

let credentials = {key: privateKey, cert: certificate};
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, './public')));

let httpServer = http.createServer(function (req, res) {
    res.writeHead(301, {
        Location: 'https://' + req.headers['host'] + req.url
    });
    res.end();
});

let httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
