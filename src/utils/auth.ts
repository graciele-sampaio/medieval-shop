import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

export default class UtilToken {
  public jwt = jsonwebtoken;

  public generateToken(user: IUser) {
    const payload = { 
      username: user.username, 
      classe: user.classe, 
      level: user.level, 
      password: user.password,
    }; 
    return this.jwt.sign(payload, process.env.JWT_SECRET as string, { 
      algorithm: 'HS256', expiresIn: '1d' });
  }
}