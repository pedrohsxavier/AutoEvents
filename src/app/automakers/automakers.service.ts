import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Automaker } from './automaker.model'
import {Observable} from 'rxjs'
import { tap, map } from 'rxjs/operators';
import { AUTO_EVENTS } from '../app.api'
// import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class AutomakerService{

  constructor(private http: HttpClient){
  }

  createAutomaker(automaker: Automaker): void{
    this.http.post(`${AUTO_EVENTS}/montadoras`, automaker).toPromise().then(data => {
      console.log(data);
    })
  }

  updateAutomaker(automaker: Automaker): Observable<any>{
    return this.http.put(`${AUTO_EVENTS}/montadoras/${automaker.id}`, automaker).pipe(
     tap(automaker => console.log('fetched automaker'))
   );
  }

  getAutomakers(): Observable<any[]>{
    return this.http.get<any[]>(`${AUTO_EVENTS}/montadoras`)
    .pipe(
      tap(automaker => console.log(automaker))
    );
  }

  automakerById(id: string) : Observable<any> {
      return this.http.get(`${AUTO_EVENTS}/montadoras/${id}`).pipe(
        tap(automaker => console.log('fetched automaker'))
      );
  }

  removeById(id: string) :  Observable<any> {
      return this.http.delete(`${AUTO_EVENTS}/montadoras/${id}`).pipe(
        tap(automaker => console.log('fetched automaker'))
      );
  }

}
