import type { Message, Client } from "discord.js";
import type { CommandKit } from "commandkit";

// If you type "hey" in a text channel your bot reply to your message with "Hi!"

export default function (
  message: Message<true>,
  client: Client<true>,
  handler: CommandKit
) {
  if (message.content === "hey") {
    message.reply("Hi!");
  }
}
