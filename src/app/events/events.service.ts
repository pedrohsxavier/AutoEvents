import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Event } from './event/event.model'
import {Observable} from 'rxjs'
import { tap, map } from 'rxjs/operators';
import { AUTO_EVENTS } from '../app.api'
import { Pageble } from './../auth/pageble.model'
// import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class EventService{

  constructor(private http: HttpClient){
  }

  createEvent(event: Event): Observable<any>{
     return this.http.post(`${AUTO_EVENTS}/eventos`, event).pipe(
      tap(event => console.log('fetched event'))
    );
  }

  updateEvent(event: Event): Observable<any>{
    return this.http.put(`${AUTO_EVENTS}/eventos/${event.id}`, event).pipe(
     tap(event => console.log('fetched event'))
   );
  }

  getEvents(): Observable<Pageble>{
    return this.http.get<Pageble>(`${AUTO_EVENTS}/eventos`)
    .pipe(
      tap(event => console.log(event))
    );
  }

  eventById(id: string) : Observable<any> {
      return this.http.get(`${AUTO_EVENTS}/eventos/${id}`).pipe(
        tap(event => console.log('fetched event'))
      );
  }

  removeById(id: string) :  Observable<any> {
      return this.http.delete(`${AUTO_EVENTS}/eventos/${id}`).pipe(
        tap(event => console.log('fetched event'))
      );
  }

}
