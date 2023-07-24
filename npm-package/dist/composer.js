"use strict";
var path = require('path');
var compose = require('docker-compose');
var filePath = path.resolve(__dirname, 'docker-compose.override.yml');
function composer() {
    // Runs docker compose up on the kafkatrace.yml folder in /src folder
    compose.upAll({ config: filePath, log: true }).then(function () {
        console.log('KafkaTrace containers running');
    }, function (err) {
        console.log('Something went wrong:', err.message);
    });
}
module.exports = composer;
