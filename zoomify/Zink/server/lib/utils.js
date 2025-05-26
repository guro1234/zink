import jwt from "jsonwebtoken";

// Function to create a token for User
export const generateToken =(userId)=>{
  const token = jwt.sign({userId},process.env.JWT_SECRET);
  return token;
}