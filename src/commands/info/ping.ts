import type {
  CommandData,
  SlashCommandProps,
  CommandOptions,
} from "commandkit";
import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Pong!");

export function run({ interaction, client, handler }: SlashCommandProps) {
  interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
}

export const options: CommandOptions = {
  botPermissions: ["SendMessages"],
  deleted: false,
};
