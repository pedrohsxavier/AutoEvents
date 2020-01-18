import { Component, OnInit, Input } from '@angular/core';
import { Event } from './../event/event.model'
import { ActivatedRoute, Router } from '@angular/router'
import { EventService } from './../events.service'
import { AuthenticationService } from './../../auth/auth.service'
import { Subscription } from 'rxjs';
import { User } from './../../user/user.model'
import { Car } from './../../cars/car.model'
import { CarsService } from './../../cars/cars.service'
import { Pageble } from './../../auth/pageble.model'

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
    dataEvento: null,
    usuarios: "",
    carros:""
  }
  inscrito: boolean = false
  cars: Car[]
  car: Car = {
    id:"",
    nome:"",
    ano:"",
    valor:"",
    montadoraId:""
  }
  carros: Car[] = []
  headElements: string[] = ["Nome", "Valor", "Cadastrar"]

  currentUserSubscription: Subscription;
  currentUser: User

  users: any[] = []
  carrosInscritos: any[] = []

  constructor
  (private eventService: EventService,
   private route: ActivatedRoute,
   private router: Router,
   private authenticationService: AuthenticationService,
   private carService: CarsService) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
});
}

  ngOnInit() {
    this.updateCars();
    this.eventService.eventById(this.route.snapshot.params['id']).subscribe((res: Event) => {
      this.event = res;
      this.users = JSON.parse(this.event.usuarios)
      for (let u of this.users) {
          if(u.id == this.currentUser.id){
            this.inscrito = true;
          }
      }
      this.carrosInscritos = JSON.parse(this.event.carros)
      console.log(this.carrosInscritos)
    }, err => {
      console.log(err);
    });
    console.log(this.currentUser)
  }

  excluirEvento(): void{
    this.eventService.removeById(this.event.id).toPromise().then(data => {
      this.router.navigate(["/events"])
      console.log("Removed data ", data)
    })

    console.log(this.event)
  }
  subscribeUser(): void{
    this.eventService.subscribeUser(this.currentUser, this.event.id).toPromise().then(data =>{
      console.log("new Data ", data)
    }, response =>{
      console.log("error ", response)
    })
  }

  updateCars(): void{
    this.carService.getCars().subscribe((res: Pageble) => {
      this.cars = res.content;
    }, err => {
      console.log(err);
    });
  }
  addCarro(carro): void{
    this.carros.push(carro)
  }

  cadastrarCarros(): void{
    console.log(this.carros);
    for (let c of this.carros) {
      this.eventService.addCar(c, this.event.id).toPromise().then(data =>{
        console.log("new Data ", data)
      }, response =>{
        console.log("error ", response)
      })
    }
  }
}
