import { ConectionPgsql } from "../../database/conection";
import { Person } from "./entities/person.entity";
import { Repository } from 'typeorm';
import { User } from "../Users/entities/user.entity";
import { hash } from 'bcrypt';

export class PersonService {

  private _repo: Repository<Person>;

  constructor(
  ) {
    this._repo = ConectionPgsql.getRepository(Person);
  };

  async getAll() {
    return await this._repo.find();
  }

  async seeder(): Promise<Person | void> {

    const foundPerson = await this._repo.findBy({ email: 'person@person.gmail' });

    if (foundPerson) return;

    const person = new Person();
    person.email = 'person@persona.gmail';

    return await person.save();

  }
}
