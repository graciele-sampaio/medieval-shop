import { IUser, IUserID } from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public user = new UserModel();

  public create(userData: IUser): Promise<IUserID> {
    return this.user.create(userData);
  }
}