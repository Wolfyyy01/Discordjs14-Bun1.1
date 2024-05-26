import { Client, GatewayIntentBits } from "discord.js";
import { CommandKit } from "commandkit";
import path from "path";

const token = Bun.env.TOKEN || process.env.TOKEN || "";

// Create the client/bot

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

// Command and event handler

new CommandKit({
  client,
  devGuildIds: [`${Bun.env.guildId || process.env.guildId}`], //Here is the dev guilds
  devUserIds: [`${Bun.env.userId || process.env.userId}`], // Here is an array with all developers of the bot
  commandsPath: path.join(__dirname, "commands"), // path to the commands directory
  eventsPath: path.join(__dirname, "events"), // path to the events directory
  validationsPath: path.join(__dirname, "validations"), // path to the validations directory
  skipBuiltInValidations: true,
  bulkRegister: true,
});

client.login(token);

// Database Connection
require("./utils/database/conect");
