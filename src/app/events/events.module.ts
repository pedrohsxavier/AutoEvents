import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EventsComponent} from './list/events.component';
import {RegisterEventComponent} from './register/register.component'
const ROUTES: Routes = [
  {path:'', component: EventsComponent},
  {path:'register', component: RegisterEventComponent}
]

@NgModule({
  declarations:[EventsComponent, RegisterEventComponent],
  imports: [ RouterModule.forChild(ROUTES)]
})
export class EventsModule{

}
