import { Component, OnInit } from '@angular/core';
import { EventService } from './../events.service'
import { Event } from '../event/event.model'

@Component({
  selector: 'pae-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[]

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((res: any[]) => {
      this.events = res.content;      
    }, err => {
      console.log(err);
    });
  }
}
