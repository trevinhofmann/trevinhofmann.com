'use strict';

import fs from 'fs';
import http from 'http';
import https from 'https';

let privateKey  = fs.readFileSync('../ssl/trevinhofmann.com.key', 'utf8');
let certificate = fs.readFileSync('../ssl/trevinhofmann.com.crt', 'utf8');

let credentials = {key: privateKey, cert: certificate};
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, './public')));

let httpServer = http.createServer(app);

httpServer.get('*',function(req,res){
    res.redirect('https://trevinhofmann.com' + req.url);
});

let httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
