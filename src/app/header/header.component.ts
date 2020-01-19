import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth/auth.service'
import { Subscription } from 'rxjs';
import { User } from './../user/user.model'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from './../user/user.service'

@Component({
  selector: 'pae-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserSubscription: Subscription;
  currentUser: User

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;      
    });
  }

  ngOnInit() {

  }

  logout(): void{
    this.authenticationService.logout()
    this.router.navigate(['/login'])
  }
}
