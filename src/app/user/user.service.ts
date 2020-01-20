import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { tap, map } from 'rxjs/operators';
import {User} from './user.model'
import { AUTO_EVENTS } from '../app.api'
// import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class UserService{

  constructor(private http: HttpClient){
  }

  createUser(user: User): void{
    this.http.post(`${AUTO_EVENTS}/usuarios`, user).toPromise().then(data => {
      console.log(data);
    })
  }

  login(user: User): void{
    this.http.post(`${AUTO_EVENTS}/login`, user).toPromise().then(data => {
      console.log(data);
    })
  }

  userById(id: string) : Observable<any> {
      return this.http.get(`${AUTO_EVENTS}/usuarios/${id}`).pipe(
        tap(event => console.log('fetched event'))
      );
  }
}
