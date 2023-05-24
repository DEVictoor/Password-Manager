import { PersonService } from "../Person/person.service";
import { UserService } from "../Users/user.service";

export class SeederService {

  private _person: PersonService;
  private _user: UserService;

  constructor() {
    this._person = new PersonService();
    this._user = new UserService();
  }

  async seeder() {

    const person = await this._person.seeder();

    if (!person) return;

    const user = await this._user.seeder(person);
  }
}
