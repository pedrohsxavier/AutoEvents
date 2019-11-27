import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pae-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
  @Input() label: string
  @Input() data: string
  @Input() color: string
  @Input() money: boolean

  constructor() { }

  ngOnInit() {
  }

}
