const path = require('path');
const compose = require('docker-compose')

const filePath = path.resolve(__dirname, 'docker-compose.override.yml');

function composer() {
  // Runs docker compose up on the kafkatrace.yml folder in /src folder
  compose.upAll({ config: filePath, log: true }).then(
    () => {
      console.log('KafkaTrace containers running')
    },
    (err) => {
      console.log('Something went wrong:', err.message)
    }
  )
}

module.exports = composer;