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
    this.http.post(`http://localhost:8080/api/eventos`, event).toPromise().then(data => {
      console.log(data);
    })
  }
  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>('http://localhost:8080/api/eventos')
    .pipe(
      tap(event => console.log('fetched events'))
    );
  }

  eventById(id: string) : Observable<any> {
      return this.http.get(`http://localhost:8080/api/eventos/${id}`).pipe(
        tap(event => console.log('fetched event'))
      );
  }

}
