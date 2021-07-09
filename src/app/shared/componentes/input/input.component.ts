import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input() titulo:string = 'Valor Label';
  @Input() nombre:string = 'name';

  constructor() { }

  ngOnInit(): void {
  }

}
