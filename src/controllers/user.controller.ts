import { Request, Response } from 'express';
import { ILogin } from '../interfaces/ILogin';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  public async create(req: Request, res: Response) {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const token = await this.userService.generateToken(userCreated);
    res.status(201).json({ token });
  }

  public async login(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;
    const token = await this.userService.login(body);
    return res.status(200).json({ token });
  }
}
