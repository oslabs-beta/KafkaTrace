Table of Contents
About Kafka Trace
Tech Stacks
Features
User Guide
Authors
License

About Kafka Trace:

Kafka Trace is an open-source product whose goal is to provide developers to streamline the tracing process locally without having to source through different technology documentation. This documentation will include how to implement OpenTelemetry, Jaeger, Zipkin, and Prometheus.

For more information, visit our website (hyperlink)

Tech Stacks (make all hyperlinks)
Typescript, Javascript, React, Express, Next.JS, Prisma, Prometheus, Jest, Git, DaisyUI, KafkaJS, Docker, Jaeger, Zipkin, OpenTelemetry

Features:
Intuitive all-in-one documentation to implement distributive tracing for Kafka
Authentication for Google and GitHub OAuth

User Guide

**IMPORTANT REMINDER**
Make sure the Kafka Cluster you want to trace has a working producer and consumer client

STEP 1 - npm install the package “kafkatrace”
In the terminal, run the command “npm install kafkatrace”
STEP 2 - import npm package to 
In the producer and consumer client:
       If in package.json there is a key:value pair => "type: module", then import {} = 'kafkatrace'
       If not “type:module” then const _ = require (‘kafkatrace’)
STEP 3 - Update latest changes in Docker
Rerun containers
STEP 4 -
Log in to website and click on UI buttons



Contributors
Name: Felix Chen, Wai San Gu, Alston Nguyen, Navdeep Simmak

License
Distributed under MIT License. See LICENSE.txt for more information



