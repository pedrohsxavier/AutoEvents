import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Event } from './event/event.model'
import {Observable} from 'rxjs'
import { tap, map } from 'rxjs/operators';
import { AUTO_EVENTS } from '../app.api'
// import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class EventService{

  constructor(private http: HttpClient){
  }

  createEvent(event: Event): void{
    this.http.post(`${AUTO_EVENTS}/eventos`, event).toPromise().then(data => {
      console.log(data);
    })
  }
  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${AUTO_EVENTS}/eventos`)
    .pipe(
      tap(event => console.log('fetched events'))
    );
  }

  eventById(id: string) : Observable<any> {
      return this.http.get(`${AUTO_EVENTS}/eventos/${id}`).pipe(
        tap(event => console.log('fetched event'))
      );
  }

  removeById(id: string) : void {
    console.log(AUTO_EVENTS);
      this.http.delete(`${AUTO_EVENTS}/eventos/${id}`).toPromise().then(data => {
        console.log(data);
      });
  }

}
