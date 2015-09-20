'use strict';

import express from 'express';
import path from 'path';

let app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(80, function () {
    console.log('Server is listening on port 80.');
});
