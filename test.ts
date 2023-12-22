import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit{
  a:string = "Hola";
  @Input() aplicacion:string = "";
  @Input() component:any;

  constructor(){}

  ngOnInit(): void {
    console.log("Que tengo en el componente??");
    console.log(this.component);
    this.component.loaded = false;
  }
}