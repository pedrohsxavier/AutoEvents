import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './register/register.component';
// import { RegisterEventComponent} from './events/register/register.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'events', loadChildren: './events/events.module#EventsModule'},
  {path: 'automakers', loadChildren: './automakers/automakers.module#AutomakersModule'},
  {path: 'cars', loadChildren: './cars/cars.module#CarsModule'}
];
