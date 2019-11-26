import { Component, OnInit, Input } from '@angular/core';
import { EventService } from './../events.service'
import { Event } from './../event/event.model'
@Component({
  selector: 'pae-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterEventComponent implements OnInit {

  @Input() event:Event = {
    id: "",
    nome: "",
    descricao: "",
    cidade: "",
    pais: "",
    ingressoValor: null,
    dataEvento: null,
  }

  constructor(private eventService: EventService) {  }

  ngOnInit() {
  }

  cadastrarEvento(): void{
    this.eventService.createEvent(this.event)
    console.log(this.event)
  }
}
