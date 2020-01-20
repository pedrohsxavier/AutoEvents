import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth/auth.service'
import { Subscription } from 'rxjs';
import { User } from './../user/user.model'
@Component({
  selector: 'pae-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUserSubscription: Subscription;
  currentUser: User

  constructor(private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

}
