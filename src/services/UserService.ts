import User, { UserDocument } from "../models/User";
import { DocumentDefinition } from "mongoose";
import { omit } from "lodash";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  const user = await User.create(input);
  return omit(user.toJSON(), "password");
}

export async function validatePassword({
  username,
  password,
}: {
  usernmame: string;
  password: string;
}) {
  const user = await User.findOne({ username });

  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return false;
  }

  return user;
}
