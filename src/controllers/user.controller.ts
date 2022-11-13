import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  public async create(req: Request, res: Response) {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const token = await this.userService.generateToken(userCreated);
    res.status(201).json({ token });
  }
}
