import { Component, OnInit, Input } from '@angular/core';
import { Event } from './event.model'
import { EventService } from './../events.service'

@Component({
  selector: 'pae-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Event

  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log(this.event)
  }
  
}
