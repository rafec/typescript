import { IGerUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGerUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Rafael",
        lastName: "Brizuena",
        email: "rafael@mail.com",
        password: "123456",
      },
    ];
  }
}
