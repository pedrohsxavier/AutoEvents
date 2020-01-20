import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ListComponent } from './list/list.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule }   from '@angular/forms';

const ROUTES: Routes = [
  {path:'', component: ListComponent }
]


@NgModule({
  declarations: [ListComponent],
  imports: [
    RouterModule.forChild(ROUTES), CommonModule, SweetAlert2Module, FormsModule
  ]
})
export class CarsModule { }
