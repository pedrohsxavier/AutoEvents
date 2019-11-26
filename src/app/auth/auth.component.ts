import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../user/user.service'
import { User } from './../user/user.model'
@Component({
  selector: 'pae-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() user: User

  constructor(private userService: UserService) { }

  ngOnInit() {    
  }

}
