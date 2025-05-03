import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  const { token } = req.cookies; //destructuring token from cookies
  if (!token) {
    return res.status(401).json({ message: "Unauthorized- no token provided" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedToken.id) {
      req.user = { id: decodedToken.id };
    } else {
      return res.status(401).json({ message: "Unauthorized- invalid token" });
    }

    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized- invalid token" });
    }

    next(); //call next middleware or route
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default protectRoute;
