'use strict';

const FORMIDABLE = require('formidable').IncomingForm;

class FileUploader {

    static receiveFiles(request, response) {
        let form = new FORMIDABLE.IncomingForm();
        form.parse(request);

        form.on('fileBegin', (name, file) => {
            file.path = `data/${file.name}`;
        });

        /*form.on('file', (name, file) => {
            return `Uploaded ${file.name}`;
        });*/

        form.on('end', () => {
            return `Uploaded file`;
        });
    }
}

module.exports = FileUploader;