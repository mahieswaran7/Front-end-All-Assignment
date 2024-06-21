import { Component } from '@angular/core';

@Component({
  selector: 'app-array-of-objects',
  templateUrl: './array-of-objects.component.html',
  styleUrl: './array-of-objects.component.css'
})
export class ArrayOfObjectsComponent {
  bikess:Array<string>= ["Kawasaki Ninja ZX-10R"," Ducati Panigale V4","Harley-Davidson","Honda Gold Wing","Suzuki","BMW M 1000 RR","Triumph Motorcycles Ltd"]
  cars:Array<string>= ["Rolls-Royce Boat Tail","Bugatti Centodieci","Bugatti La Voiture Noire","Pagani Huayra","Bugatti Chiron Pur Sport","Bugatti Divo"]
  car:boolean=false
  bike:boolean=false
  Bikes(){
    this.car=false
    this.bike=true
  }
  carss(){
    this.car=true
    this.bike=false
  }
  data_here:string = ""
  clickingbutton(singleitem:string){
    this.data_here = singleitem
  }


}
