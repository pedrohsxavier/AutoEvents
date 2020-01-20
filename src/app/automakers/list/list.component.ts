import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { Automaker } from './../automaker.model';
import { AutomakerService } from './../automakers.service';
=======
import { Automaker } from './../automaker.model'
import { AutomakerService } from './../automakers.service'
import { Pageble } from './../../auth/pageble.model'

>>>>>>> bfc2c6359f41e7a26ea40599302ab86023ac7e7b
@Component({
  selector: 'pae-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() montadora: Automaker = {
    id: null,
<<<<<<< HEAD
    nome: '',
    pais: ''
  };
  headElements = ['Id', 'Nome', 'Pais', ''];
  montadoras: Automaker[];
=======
    nome: "",
    pais:""
  }
  headElements = ["Id", "Nome", "Pais", "Editar", "Deletar"]
  montadoras: Automaker[]
>>>>>>> bfc2c6359f41e7a26ea40599302ab86023ac7e7b

  constructor(private automakerService: AutomakerService) { }

  ngOnInit() {
    this.updateAutomaker();
  }

<<<<<<< HEAD
  salvarMontadora(): void {
    this.automakerService.createAutomaker(this.montadora);
    this.montadora = {
      id: null,
      nome: '',
      pais: ''
    };
    this.updateAutomaker();
  }

  updateAutomaker(): void {
    this.automakerService.getAutomakers().subscribe((res: any) => {
=======
  salvarMontadora(): void{
    if(this.montadora.id){
      this.automakerService.updateAutomaker(this.montadora).toPromise().then( data => {
          console.log(data)
          this.updateAutomaker()
        }, err =>{
            console.log(err)
        }
      );
    }else{
      this.automakerService.createAutomaker(this.montadora).toPromise().then( data => {
          console.log(data)
          this.updateAutomaker()
        }, err =>{
            console.log(err)
        }
      );
      this.montadora = {
        id: null,
        nome: "",
        pais:""
      }
    }
    this.updateAutomaker()

  }

  setMontadora(mont: Automaker): void{
    this.montadora = mont
  }
  updateAutomaker(): void{
    this.automakerService.getAutomakers().subscribe((res: Pageble) => {
>>>>>>> bfc2c6359f41e7a26ea40599302ab86023ac7e7b
      this.montadoras = res.content;
    }, err => {
      console.log(err);
    });
  }

  deleteAutomaker(id: number): void{
    this.automakerService.removeById(id).toPromise().then(data => {
      this.updateAutomaker()
      console.log("Removed data ", data)
    })
  }
}
