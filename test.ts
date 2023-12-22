import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent {
  a:string = "Hola";
  @Input() aplicacion:string = "";
  @Input() component:any;
}