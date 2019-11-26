import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {EventsComponent} from './list/events.component';
import { EventComponent } from './event/event.component'
import { RegisterEventComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

const ROUTES: Routes = [
  {path:'', component: EventsComponent },
  {path:'register', component: RegisterEventComponent },
  {path:':id', component: ProfileComponent}
    // children:[
    //   {path:'', redirectTo:'', pathMatch:'full'},
    //   {path:'reviews', component: ReviewsComponent},
    //   {path:'menu', component: MenuComponent}
    // ]},
 ];

@NgModule({
  declarations:[EventsComponent, EventComponent, RegisterEventComponent, ProfileComponent],
  imports: [ RouterModule.forChild(ROUTES), CommonModule, HttpClientModule, FormsModule]
})
export class EventsModule{

}
