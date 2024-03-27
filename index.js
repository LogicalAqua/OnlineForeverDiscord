const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  bot.editStatus("dnd", {
    name: "Hello, I'm a simple bot",
    afk: false
  });
});

bot.connect(); // Get the bot to connect to Discord
