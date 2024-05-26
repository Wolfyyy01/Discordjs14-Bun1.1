import chalk from "chalk";
import mongoose from "mongoose";

const uri = Bun.env.MONGO_URL || process.env.MONGO_URL;

// Connect to the mongodb database

export default mongoose.connect(`${uri}`).then(() => {
  console.log(chalk.yellow("🌿 | Connected to MongoDB"));
});
