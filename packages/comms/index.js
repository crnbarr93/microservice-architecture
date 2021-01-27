const redis = require("redis");

const subscriber = redis.createClient();
const publisher = redis.createClient();

subscriber.on("error", function (error) {
  console.error(error);
});

publisher.on("error", function (error) {
  console.error(error);
});

subscriber.subscribe("liked_cat");

subscriber.on("message", (channel, message) => {
  subscriber.emit(channel, message);
});

module.exports = { subscriber, publisher };
