import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../user/user.model'
import { first } from 'rxjs/internal/operators/first';
@Component({
  selector: 'pae-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() user: User = {
    id: null,
    nome: "",
    dataNascimento: "",
    email: "",
    senha: "",
    login: ""
  }

  constructor(private authService :AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  login(): void{
    console.log(this.user);
    this.authService.login(this.user)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(["/events"]);
                },
                error => {
                    console.log("Deu bosta")
                });
  }
}
