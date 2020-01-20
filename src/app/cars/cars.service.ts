import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Car } from './car.model'
import {Observable} from 'rxjs'
import { tap, map } from 'rxjs/operators';
import { AUTO_EVENTS } from '../app.api'
import { Pageble } from './../auth/pageble.model'
// import {ErrorHandler} from '../app.error-handler'


@Injectable()


export class CarsService{

    constructor(private http: HttpClient){
    }

    createCar(car: Car): Observable<any>{
       return this.http.post(`${AUTO_EVENTS}/carros`, car).pipe(
        tap(car => console.log('fetched car'))
      );
    }

    updateCar(car: Car): Observable<any>{
      return this.http.put(`${AUTO_EVENTS}/carros/${car.id}`, car).pipe(
       tap(car => console.log('fetched car'))
     );
    }

    getCars(): Observable<Pageble>{
      return this.http.get<Pageble>(`${AUTO_EVENTS}/carros`)
      .pipe(
        tap(car => console.log(car))
      );
    }

    carById(id: string) : Observable<any> {
        return this.http.get(`${AUTO_EVENTS}/carros/${id}`).pipe(
          tap(car => console.log('fetched car'))
        );
    }

    removeById(id: number) :  Observable<any> {
        return this.http.delete(`${AUTO_EVENTS}/carros/${id}`).pipe(
          tap(car => console.log('fetched car'))
        );
    }
}
