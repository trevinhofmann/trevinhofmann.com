'use strict';

import fs from 'fs';
import http from 'http';
import path from 'path';

let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, './public')));

http.createServer(app).listen(80);
