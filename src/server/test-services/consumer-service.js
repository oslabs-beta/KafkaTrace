const { Kafka } = require('kafkajs');

const consumeKafka = async () => {
  const kafka = new Kafka({
    clientId: 'email-service-client',
    brokers: ['localhost:9092'],
  });

  const consumer = kafka.consumer({ groupId: 'email-group' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'send-email' });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('received message from kafka', {
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

consumeKafka();

console.log('Consumer-service started');
