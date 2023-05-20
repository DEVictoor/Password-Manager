import { Person } from "../Person/entities/person.entity";
import { User } from "./entities/user.entity";
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { ConectionPgsql } from "../../database/conection";

export class UserService {

  private _repo: Repository<User>;

  constructor() {
    this._repo = ConectionPgsql.getRepository(User);
  }

  async seeder(person: Person): Promise<User | void> {

    if (person.email == 'person@persona.gmail') return;

    const user = new User();
    user.person = person;
    user.password = await hash('password', 10);
    user.username = 'username_person';

    return await user.save();
  }
}
