import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  label: string = 'Nombre de Usuario';
  name: string = 'nombre';
  constructor() {

  }

  ngOnInit(): void {
  }

}
