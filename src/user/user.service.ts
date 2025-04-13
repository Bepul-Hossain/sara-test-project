/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { mockUsers } from "./mock-users";

@Injectable()
export class UserService {
    private users = mockUsers;

    findAll() {
        return this.users;
    }
}
