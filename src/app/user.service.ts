import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {User} from './user';

@Injectable()
export class UserService {

  private _getUrl = '/api/users';

  constructor(private _http: HttpClient) {}

  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Array<User>) => response);
  }
}
