import { Component, OnInit, Input } from '@angular/core';
import { EventService } from './../events.service'
import { Event } from './../event/event.model'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from './../../auth/auth.service'
import { Subscription } from 'rxjs';
import { User } from './../../user/user.model'

@Component({
  selector: 'pae-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterEventComponent implements OnInit {

  currentUser: User
  currentUserSubscription: Subscription;
  @Input() event:Event = {
    id: "",
    nome: "",
    descricao: "",
    cidade: "",
    pais: "",
    ingressoValor: null,
    dataEvento: null,
    usuarioId: 1
  }

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
                this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                this.currentUser = user;
              });
            }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.eventService.eventById(this.route.snapshot.params['id']).subscribe((res: Event) => {
        this.event = res;
      }, err => {
        console.log(err);
      });
    }
  }

  cadastrarEvento(): void{
    this.event.usuarioId = this.currentUser.id
    if(this.event.id == ""){
      this.eventService.createEvent(this.event).toPromise().then(data =>{
        this.router.navigate(["/events"])
        console.log("new Data ", data)
      }, response =>{
        console.log("error ", response)
      })
    }else{
      this.eventService.updateEvent(this.event).toPromise().then(data =>{
        this.router.navigate(["/events"])
        console.log("updated Data ", data)
      }, response =>{
        console.log("error ", response)
      })
    }
    console.log(this.event)
  }
}
