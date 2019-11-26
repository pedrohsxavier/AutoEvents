import { Component, OnInit, Input } from '@angular/core';
import { Event } from './../event/event.model'
import { ActivatedRoute } from '@angular/router'
import { EventService } from './../events.service'

@Component({
  selector: 'pae-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() event: Event

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.eventById(this.route.snapshot.params['id']).subscribe((res: Event[]) => {      
      this.event = res;
    }, err => {
      console.log(err);
    });
  }

}
