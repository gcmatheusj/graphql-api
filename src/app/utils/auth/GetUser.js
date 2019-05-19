import jwt from "jsonwebtoken";
import authConfig from "../../../config/auth";

function getUser(payload) {
  if (!payload) {
    return null;
  }

  const [, token] = payload.split(" ");

  const { userId } = jwt.verify(token, authConfig.secret);

  return userId;
}

export default getUser;
