import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CustomCardComponent } from './custom-card/custom-card.component'
@NgModule({
  declarations: [CustomCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CustomCardComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule{

}
