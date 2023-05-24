import { UserService } from "../Users/user.service";
import { LoginDTO } from "./DTO/login.dto";
import { compareSync } from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export class AuthService {
  private _userservice: UserService;

  constructor() {
    this._userservice = new UserService();
  }

  async login({
    email,
    password,
  }: LoginDTO): Promise<{ token: string } | Error> {
    const user = await this._userservice.findOneByEmail(email);

    if (!user) throw new Error("No se encontro el usuario");

    const isMatch = compareSync(password, user.password);

    if (!isMatch) throw new Error("Credenciales incorrectas");

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY || "", {
      expiresIn: "3d",
    });

    return { token };
  }

  async register() {}

  async authgoogle() {}
}
