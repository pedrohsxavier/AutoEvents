import { Component, OnInit } from '@angular/core';
import { Car } from './../car.model'
import { CarsService } from './../cars.service'
import { Pageble } from './../../auth/pageble.model'

@Component({
  selector: 'pae-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cars: Car[]
  car: Car = {
    id:"",
    nome:"",
    ano:"",
    valor:"",
    montadoraId:""
  }

  headElements: string[] = ["Id", "Nome", "Ano", "Valor", "MontadoraId", "Editar", "Deletar"]
  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.updateCars()
  }

  saveCar(){

    if(this.car.id){
      this.carService.updateCar(this.car).toPromise().then( data =>{
          this.updateCars()
          console.log(data)
      }, err =>{
        console.log(err)
      })
    }else{
      this.carService.createCar(this.car).toPromise().then( data =>{
          this.updateCars()
          console.log(data)
      }, err =>{
        console.log(err)
      })
    }

    this.car = {
      id: null,
      nome: "",
      ano:"",
      valor: "",
      montadoraId: ""
    }

  }

  setCar(car: Car): void {
    this.car = car
  }
  updateCars(): void{
    this.carService.getCars().subscribe((res: Pageble) => {
      this.cars = res.content;
    }, err => {
      console.log(err);
    });
  }

  deleteCar(id: number): void{
    this.carService.removeById(id).toPromise().then( data =>{
      console.log(data)
    })
  }
}
