import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  

  urlvideo: string = 'Video'
  urlBusqueda:string = ''
  

  constructor() { }

  ngOnInit(): void {
  }
 
  cambiarURL(){

    this.urlvideo ='sus';

  }
}
