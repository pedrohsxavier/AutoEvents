import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const ROUTES: Routes = [
  {path:'', component: ListComponent },
  {path:'register', component: RegisterComponent }
]

@NgModule({
  declarations: [ListComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(ROUTES), CommonModule
  ]
})
export class AutomakersModule { }
