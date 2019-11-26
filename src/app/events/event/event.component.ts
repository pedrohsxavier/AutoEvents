import { Component, OnInit, Input } from '@angular/core';
import { Event } from './event.model'

@Component({
  selector: 'pae-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Event

  constructor() { }

  ngOnInit() {
    console.log(this.event)
  }

}
