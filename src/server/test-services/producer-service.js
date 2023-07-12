const PORT = process.env.PORT || 8080;

const express = require('express');
const router = express.Router();
const { Kafka, Partitioners } = require('kafkajs');

const app = express();

const kafka = new Kafka ({
    clientId : 'user-service-client', 
    brokers: ['localhost:9092']
})
const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

app.get('/users', async (req, res) => {
    if (req.query.fail) {
        console.error('Failed to fetch users');
        res.sendStatus(500);
    }
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();

    res.json(data);
});

app.post('/users/:id/email/', async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.sendStatus(404);
    }
    
    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json();

        await producer.connect();
        await producer.send({
            topic: 'send-email',
            messages: [
                { value: JSON.stringify(data) },
            ]
        })
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
        console.error(error, error);
    }
})

app.listen(PORT, () => {
    console.log(`Producer-service is listening on Port:${PORT}`)
})

