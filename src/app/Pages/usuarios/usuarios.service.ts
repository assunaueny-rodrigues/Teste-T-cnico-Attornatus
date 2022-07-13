import { Injectable } from '@angular/core';
import { UserProps } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  users: Array<UserProps> = []

  constructor() { }

  createUser(user: UserProps, currentArray: Array<UserProps>){
    this.users = [...currentArray, user]
    return this.users;
  }

  updateUser(userSelected: UserProps, newUser: UserProps, currentArray: Array<UserProps>){
    let index = currentArray.indexOf(userSelected)
    currentArray[index] = newUser
    this.users = [...currentArray]
    return this.users;
  }

  deleteUser(userSelected: UserProps, currentArray: Array<UserProps>){
    let index = currentArray.indexOf(userSelected)
    currentArray.splice(index, 1)
    this.users = [...currentArray]
    return this.users;
  }

}
