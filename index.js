const fs = require('fs');
const http = require('http');
const path = require('path');
const renderPage = require('./server/renderPage');
const setFilePath = require('./server/setFilePath');
const setContentType = require('./server/setContentType');

const server = http.createServer(
    (req, res) => {
        let filePath = setFilePath({
            req,
            path
        });

        let contentType = setContentType(path.extname(filePath));

        renderPage({
            fs,
            res,
            path,
            filePath,
            contentType,
        });
    }
);

const PORT = process.env.PORT || 8080;

server.listen(PORT);
