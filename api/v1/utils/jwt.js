import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { JWT_SECRET } = process.env;

export default class Jwt {
  static async generateToken(payload) {
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '14d' });
    return token;
  }

  static async verifyToken(token) {
    const decoded = await jwt.verify(token, JWT_SECRET);
    return decoded;
  }
}
