import { Injectable } from '@angular/core';
import {User} from "./User";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users'
  constructor() { }
  isAuthenticated:boolean = false;
  users : User[] =[ {
    id : 1,
    email : 'amirclient@gmail.com',
    password : 'Client123456789!',
    role : 'client'
  },
    {
    id : 2,
    email : 'amiradmin@gmail.com',
    password : 'Admin123456789!',
    role : 'admin'
  }
  ]

  userAuth :User|undefined;
  authenticateUserByCredentials(email : any, password :any):boolean{
    this.getUserByEmail(email).then((user=>{
      this.userAuth = user
    }))
    if (this.userAuth?.password == password){
      this.isAuthenticated=true;
      return true;
    } else {
      return false;
    }
  }
  async getUserByEmail(email : string): Promise<User | undefined>{
    const user = this.users.find(user => user.email === email);
    return user;
  }
}
