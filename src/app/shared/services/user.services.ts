import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { BaseApi } from '../core/base-api';
import { User } from '../models/user.model';

@Injectable()
export class UsersService extends BaseApi {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User | undefined> {
    return this.get(`users?email=${email}`).pipe(
      map((users: User[]): User | undefined =>
        users.length > 0 ? users[0] : undefined
      )
    );
  }

  createNewUser(user: User): Observable<User> {
    return this.post('users', user);
  }
}
