import { Component, OnInit, Input } from '@angular/core';
import { Automaker } from './../automaker.model'
import { AutomakerService } from './../automakers.service'
@Component({
  selector: 'pae-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() montadora: Automaker = {
    id: null,
    nome: "",
    pais:""
  }
  headElements = ["Id", "Nome", "Pais", ""]
  montadoras: Automaker[]

  constructor(private automakerService: AutomakerService) { }

  ngOnInit() {
    this.updateAutomaker()
  }

  salvarMontadora(): void{
    this.automakerService.createAutomaker(this.montadora)
    this.montadora = {
      id: null,
      nome: "",
      pais:""
    }
    this.updateAutomaker()
  }

  updateAutomaker(): void{
    this.automakerService.getAutomakers().subscribe((res: any[]) => {
      this.montadoras = res.content;
    }, err => {
      console.log(err);
    });
  }
}
