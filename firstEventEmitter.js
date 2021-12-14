//Resource: https://www.digitalocean.com/community/tutorials/using-event-emitters-in-node-js
const { EventEmitter } = require("events");
const firstEmitter = new EventEmitter();
firstEmitter.emit("My first event");
