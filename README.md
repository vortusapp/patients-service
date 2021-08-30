<p align="center">
  <a href="http://vortus.co.nz/" target="blank"><img src="https://cdn.shopify.com/s/files/1/0146/2314/6070/files/Vortus_Logo_Transparent_360x.png?" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Built with <a href="https://docs.nestjs.com/" target="_blank">NestJS</a>, <a href="http://nodejs.org" target="_blank">Node.js</a>, <a href="https://www.apollographql.com/docs/apollo-server/" target="_blank">Apollo Graphql</a>, <a href="https://kafka.js.org/" target="_blank">KafkaJS</a> and <a href="https://docs.mongodb.com/" target="_blank">mongoDB</a></p>


## Description

This is the scafold for different microservices for the development of the VortusApp

## Installation

```bash
$ npm install
```

## Setup

<p>The application requires a monogoDB database and a running Kafka cluster. </p>
<p>For Kafka a development environment can be started by following this quick start guide for <a href="https://docs.confluent.io/platform/current/quickstart/index.html" target="_blank">Confluent Platform</a>.</p>
<p>For mongoDB a quick start can be found <a href="https://docs.mongodb.com/manual/tutorial/getting-started/" target="_blank">here</a> although it may be easier to spin up a cluster with <a href="https://docs.atlas.mongodb.com/getting-started/" target="_blank">mongoDB Atlas</a>.</p>

<p>Details for these services need to be entered into a .env file in the root of the application with the following environmental variables</p>
```JSON
KAFKA_BROKERS = localhost:9092
KAFKA_CLIENT_ID = patients
KAFKA_TOPIC = patients
MONGODB_URL=mongodb://127.0.0.1:27017/patients
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## Support

I really don't know what I am doing so if you see something blatantly stupid maybe let me know.
