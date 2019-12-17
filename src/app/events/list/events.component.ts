import { Component, OnInit } from '@angular/core';
import { EventService } from './../events.service'
import { Event } from '../event/event.model'
import { Subscription } from 'rxjs';
import { User } from './../../user/user.model'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from './../../auth/auth.service'
import { Pageble } from './../../auth/pageble.model'

@Component({
  selector: 'pae-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  currentUserSubscription: Subscription;
  currentUser: User
  events: Event[]

  constructor(private authenticationService: AuthenticationService,
              private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) {
                this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                  this.currentUser = user;
                });
 }

  ngOnInit() {
    this.eventService.getEvents().subscribe((res: Pageble) => {
      this.events = res.content;
    }, err => {
      console.log(err);
    });
  }
}
