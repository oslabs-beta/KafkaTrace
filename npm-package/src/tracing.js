const opentelemetry = require("@opentelemetry/sdk-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-proto");
const { OTLPMetricExporter } = require("@opentelemetry/exporter-metrics-otlp-proto");
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const { ExpressInstrumentation } = require("@opentelemetry/instrumentation-express");
const { KafkaJsInstrumentation } = require('opentelemetry-instrumentation-kafkajs');

function tracing(serviceName) {
  
  const traceExporter = new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    url: "http://localhost:4318/v1/traces",
    // optional - collection of custom headers to be sent with each request, empty by default
    headers: {},
  });
  
  const sdk = new opentelemetry.NodeSDK({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
    traceExporter,
    metricReader: new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        url: "http://localhost:4318/v1/metrics", // url is optional and can be omitted - default is http://localhost:4318/v1/metrics
        headers: {}, // an optional object containing custom headers to be sent with each request
        concurrencyLimit: 1, // an optional limit on pending requests
      }),
    }),
    instrumentations: [
      new HttpInstrumentation(),
      new ExpressInstrumentation(),
      new KafkaJsInstrumentation(),
    ],
  });

  sdk.start();
  
  process.on('SIGTERM', () => {
    sdk.shutdown()
      .then(() => console.log('Tracing terminated'))
      .catch((error) => console.log('Error terminating tracing', error))
      .finally(() => process.exit(0));
  });
}

module.exports = tracing;