import { Component, OnInit } from '@angular/core';
import { EventService } from './../events.service';
import { Event } from '../event/event.model';
import { Subscription } from 'rxjs';
<<<<<<< HEAD
import { User } from './../../user/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../auth/auth.service';
=======
import { User } from './../../user/user.model'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from './../../auth/auth.service'
import { Pageble } from './../../auth/pageble.model'
>>>>>>> bfc2c6359f41e7a26ea40599302ab86023ac7e7b

@Component({
  selector: 'pae-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  currentUserSubscription: Subscription;
  currentUser: User;
  events: Event[];

  constructor(private authenticationService: AuthenticationService,
              private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) {
                this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                  this.currentUser = user;
                });
 }

  ngOnInit() {
<<<<<<< HEAD
    this.eventService.getEvents().subscribe((res: any) => {
=======
    this.eventService.getEvents().subscribe((res: Pageble) => {
>>>>>>> bfc2c6359f41e7a26ea40599302ab86023ac7e7b
      this.events = res.content;
    }, err => {
      console.log(err);
    });
  }
}
