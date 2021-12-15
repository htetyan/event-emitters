const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});

console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);

const onBuy = () => {
    console.log("I will be removed soon");
};

ticketManager.off("buy", onBuy);
console.log(`We added a new event listener, total count for the buy event is: ${ticketManager.listenerCount("buy")}`);
ticketManager.buy("test@email.com", 20);
ticketManager.removeAllListeners("buy");
console.log(`We have have: ${ticketManager.listenerCount("buy")} for the buy event`);
ticketManager.buy("test2@email.com", 20);
console.log("The last ticket was bought");
