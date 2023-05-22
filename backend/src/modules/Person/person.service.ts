import { ConectionPgsql } from "../../database/conection";
import { Person } from "./entities/person.entity";
import { DeleteResult, ObjectId, Repository, UpdateResult } from "typeorm";
import { User } from "../Users/entities/user.entity";
import { hash } from "bcrypt";
import { PersonDTO } from "./DTO/person.dto";

export class PersonService {
  private _repo: Repository<Person>;

  constructor() {
    this._repo = ConectionPgsql.getRepository(Person);
  }

  async getAll() {
    return await this._repo.find();
  }

  async findById(id: string): Promise<Person | null> {
    return this._repo.findOneBy({ id });
  }

  async create(body: PersonDTO): Promise<Person> {
    return this._repo.create(body);
  }

  async update(body: PersonDTO, id: string): Promise<UpdateResult> {
    return this._repo.update({ id }, body);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this._repo.delete({ id });
  }

  async seeder(): Promise<Person | void> {
    const foundPerson = await this._repo.findBy({
      email: "person@person.gmail",
    });

    if (foundPerson) return;

    const person = new Person();
    person.email = "person@persona.gmail";

    return await person.save();
  }
}
