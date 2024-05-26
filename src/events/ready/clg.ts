import type { Client } from "discord.js";
import type { CommandKit } from "commandkit";
import chalk from "chalk";

export default function (
  c: Client<true>,
  client: Client<true>,
  handler: CommandKit
) {
  console.log(chalk.magenta(`🤖 | ${c.user.username} is ready!`));
}
