import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../user/user.service'
import { User } from './../user/user.model'

@Component({
  selector: 'pae-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  @Input() user: User = {
    id:"",
    nome: "",
    dataNascimento: "",
    email: "",
    senha: ""
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  cadastrarUsuario(): void{
    console.log(this.user);
    this.userService.createUser(this.user)    
  }

}
