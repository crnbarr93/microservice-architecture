# microservice-architecture
A sample repo to demonstrate a microservice based Nodejs/Express architecture in the form of a basic user service and a basic cat service with a provided frontend to allow a user to "like" a cat.

## Inter-Service Communication
Inter-service communication is performed across two channels:
  - Direct communication between services is done via REST endpoints exposed by the service itself
  - Indirect communication is done via PUBSUB channels on a Redis server using a shared Publisher/Subscriber client in the `comms` package
  
An example of direct communication in this repository would be populating the list of "liked" cats for a particular user as demonstrated in the `/user/:id/cats` endpoint. An example of indirect communication is updating the number of likes a cat has received on the `liked_cat` channel. The actual implementation of this in the `lib/users.js` and `lib/cats.js` in each respective package. Indirect communication is completely event driven in the case that an action affects multiple services and not just a single one.

## Scalability
The number of microservices that can be implemented on this structure is only limited by the number of ports available to use. An improvement to this system would be to dockerize the entire system and implement a form of service discovery to allow ports to be easily configured.

## Getting Started
To get started simply pull the repo and run:

```
lerna bootstrap
npm run start
```

This will start each service independently, including the basic web page to interact with the services. A Redis server is required.
The default ports are:
  - Users: `:8001`
  - Cats: `:8002`
  - Frontend: `:3000`
