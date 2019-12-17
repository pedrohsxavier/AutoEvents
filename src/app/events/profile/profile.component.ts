import { Component, OnInit, Input } from '@angular/core';
import { Event } from './../event/event.model'
import { ActivatedRoute, Router } from '@angular/router'
import { EventService } from './../events.service'
import { AuthenticationService } from './../../auth/auth.service'
import { Subscription } from 'rxjs';
import { User } from './../../user/user.model'

@Component({
  selector: 'pae-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() event: Event ={
    id: "0",
    nome: "",
    descricao:"",
    cidade:"",
    pais:"",
    ingressoValor: null,
    usuarioId: null,
    dataEvento: null
  }
  currentUserSubscription: Subscription;
  currentUser: User

  constructor
  (private eventService: EventService,
   private route: ActivatedRoute,
   private router: Router,
   private authenticationService: AuthenticationService) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
});
}

  ngOnInit() {
    this.eventService.eventById(this.route.snapshot.params['id']).subscribe((res: Event) => {
      this.event = res;
    }, err => {
      console.log(err);
    });
  }

  excluirEvento(): void{
    this.eventService.removeById(this.event.id).toPromise().then(data => {
      this.router.navigate(["/events"])
      console.log("Removed data ", data)
    })

    console.log(this.event)
  }

}
