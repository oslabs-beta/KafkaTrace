"use strict";
var opentelemetry = require("@opentelemetry/sdk-node");
var OTLPTraceExporter = require("@opentelemetry/exporter-trace-otlp-proto").OTLPTraceExporter;
var OTLPMetricExporter = require("@opentelemetry/exporter-metrics-otlp-proto").OTLPMetricExporter;
var PeriodicExportingMetricReader = require('@opentelemetry/sdk-metrics').PeriodicExportingMetricReader;
var Resource = require('@opentelemetry/resources').Resource;
var SemanticResourceAttributes = require('@opentelemetry/semantic-conventions').SemanticResourceAttributes;
var HttpInstrumentation = require("@opentelemetry/instrumentation-http").HttpInstrumentation;
var ExpressInstrumentation = require("@opentelemetry/instrumentation-express").ExpressInstrumentation;
var KafkaJsInstrumentation = require('opentelemetry-instrumentation-kafkajs').KafkaJsInstrumentation;
function tracing(serviceName) {
    var _a;
    var traceExporter = new OTLPTraceExporter({
        // optional - default url is http://localhost:4318/v1/traces
        url: "http://localhost:4318/v1/traces",
        // optional - collection of custom headers to be sent with each request, empty by default
        headers: {},
    });
    var sdk = new opentelemetry.NodeSDK({
        resource: new Resource((_a = {},
            _a[SemanticResourceAttributes.SERVICE_NAME] = serviceName,
            _a)),
        traceExporter: traceExporter,
        metricReader: new PeriodicExportingMetricReader({
            exporter: new OTLPMetricExporter({
                url: "http://localhost:4318/v1/metrics",
                headers: {},
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
    process.on('SIGTERM', function () {
        sdk.shutdown()
            .then(function () { return console.log('Tracing terminated'); })
            .catch(function (error) { return console.log('Error terminating tracing', error); })
            .finally(function () { return process.exit(0); });
    });
}
module.exports = tracing;
