# Discord.js v14 Bot with bun

This repository contains a Discord bot built using Discord.js v14 and [bun](https://bun.sh), a JavaScript runtime that is significantly faster than Node.js and supports TypeScript.

## Installation

Before running the bot, make sure you have installed `bun` from [https://bun.sh](https://bun.sh). Then follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Wolfyyy01/Discordjs14-Bun1.1
   ```

2. Navigate to the cloned repository:

   ```bash
   cd your_repository
   ```

3. Install dependencies using `bun`:
   ```bash
   bun install
   ```

## Configuration

After installing dependencies, rename the `.env.example` file to `.env` and fill in the necessary details:

```plaintext
TOKEN=YOUR_DISCORD_BOT_TOKEN
guildId=YOUR_GUILD_ID
userId=YOUR_USER_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET

MONGO_URL=YOUR_MONGODB_URL
```

Make sure to replace `YOUR_DISCORD_BOT_TOKEN`, `YOUR_GUILD_ID`, `YOUR_USER_ID`, `YOUR_CLIENT_SECRET`, and `YOUR_MONGODB_URL` with your actual Discord bot token, guild ID, user ID, client secret, and MongoDB URL respectively.

## Usage

Once you have completed the configuration, you can start the bot in development mode by running:

```bash
bun dev
```

This command will start the bot in development mode, facilitating your development and testing process.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with any improvements or additional features.

If you encounter any issues or have suggestions for improvements, please open an issue on GitHub.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it however you like.
