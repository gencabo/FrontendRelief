import { Component, OnInit, Input } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {

  @Input() urlbook: string= 'vacio'
   bookmarks: string[] = []
    show:boolean = false;
    
  constructor() { }
  ngOnInit(): void {
  }


  transform():void{
  
    const url:string = this.urlbook;

        this.bookmarks.push(url);
      
    
    
  }
  }
