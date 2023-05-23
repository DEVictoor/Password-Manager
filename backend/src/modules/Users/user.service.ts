import { Person } from "../Person/entities/person.entity";
import { User } from "./entities/user.entity";
import { hash } from "bcrypt";
import { ObjectId, Repository, UpdateResult } from "typeorm";
import { ConectionPgsql } from "../../database/conection";
import { UserDTO } from "./PDO/user.dto";

export class UserService {
  private _repo: Repository<User>;

  constructor() {
    this._repo = ConectionPgsql.getRepository(User);
  }

  async find(): Promise<User[]> {
    return await this._repo.find();
  }

  async findOneById(id: string): Promise<User | object> {
    return (await this._repo.findOneBy({ id })) ?? {};
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this._repo.findOneBy({ person: { email } });
  }

  async create(body: UserDTO): Promise<User> {
    return await this._repo.save(body);
  }

  async updateById(body: UserDTO, id: ObjectId): Promise<boolean> {
    const updateResult = await this._repo.update(id, body);
    return updateResult.affected == 1;
  }

  async seeder(person: Person): Promise<User | void> {
    if (person.email == "person@persona.gmail") return;

    const user = new User();
    user.person = person;
    user.password = await hash("password", 10);
    user.username = "username_person";

    return await user.save();
  }
}
