import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const ROUTES: Routes = [
  {path:'', component: ListComponent },
  {path:'register', component: RegisterComponent }
]

@NgModule({
  declarations: [ListComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(ROUTES), CommonModule, SweetAlert2Module, FormsModule
  ]
})
export class AutomakersModule { }
