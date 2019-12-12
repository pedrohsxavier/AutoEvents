import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {EventsComponent} from './list/events.component';
import { EventComponent } from './event/event.component'
import { RegisterEventComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const ROUTES: Routes = [
  {path:'', component: EventsComponent },
  {path:'register', component: RegisterEventComponent },
  {path:':id', component: ProfileComponent},
  {path:'edit/:id', component: RegisterEventComponent}
    // children:[
    //   {path:'', redirectTo:'', pathMatch:'full'},
    //   {path:'reviews', component: ReviewsComponent},
    //   {path:'menu', component: MenuComponent}
    // ]},
 ];

@NgModule({
  declarations:[EventsComponent, EventComponent, RegisterEventComponent, ProfileComponent],
  imports: [ RouterModule.forChild(ROUTES), CommonModule, HttpClientModule, FormsModule, SharedModule, SweetAlert2Module]
})
export class EventsModule{

}
