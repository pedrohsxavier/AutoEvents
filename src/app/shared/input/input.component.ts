import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'pae-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() input: any
  @Input() label: string
  @Input() errorMessage: string

  constructor() { }

  // @ContentChild(NgModel) model: NgModel

  ngOnInit() {
  }

  ngAfterContentInit(){
    // this.input = this.model
    // if(this.input === undefined){
    //   throw new Error('Esse componente precisa da diretiva ngModel')
    // }
  }
}
