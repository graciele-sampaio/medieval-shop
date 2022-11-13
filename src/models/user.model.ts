import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser, IUserID } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  public async create(user: IUser): Promise<IUserID> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    return { id: insertId, ...user };
  }

  public async getLogin(login: ILogin): Promise<IUser[]> {
    const { username, password } = login;
    const [rows] = await this.connection.execute<(IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.users WHERE username=? AND password=?', [username, password]);
    return rows;
  }
}
