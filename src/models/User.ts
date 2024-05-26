import { Schema, model } from "mongoose";
import type { UserType } from "../utils/types";

// A user schema for an easy economy systme

const UserSchema = new Schema<UserType>({
  userId: String,
  coins: {
    type: Number,
    default: 100,
  },
});

const User = model<UserType>("Users", UserSchema);
export default User;
