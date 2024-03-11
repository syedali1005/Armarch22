import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
export const verifyToken = (token,req, next) => {
  console.log(token);
  if (!token) {
    return next(errorHandler(402, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    console.log("user", user)
    req.user = user; 
    return req.user;
  });
};

