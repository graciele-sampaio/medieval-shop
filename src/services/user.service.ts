import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
import HttpException from '../utils/http.exception';

export default class UserService {
  public user = new UserModel();

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

  public create(userData: IUser): Promise<IUser> {
    return this.user.create(userData);
  }

  public async login(loginFields: ILogin) {
    const user = await this.user.getLogin(loginFields);
    if (!user) {
      throw new HttpException(401, 'Username or password invalid');
    }
    return this.generateToken(user[0]);
  }
}