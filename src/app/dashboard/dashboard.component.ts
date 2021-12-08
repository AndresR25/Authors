import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authors : any;
  constructor(private _Service: AuthorsService,  
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.collectAll();
  }
  collectAll (){
    let observable = this._Service.getAll();
    observable.subscribe(
      (data : any) =>{
        this.authors = data;
      },
      ( error: any ) => {
        console.log( error );
      }
    )
  }

  removeAuthor(id : String){
    let observable = this._Service.remove(id);
    observable.subscribe(
      (data : any) =>{
        this.collectAll();
      },
      ( error: any ) => {
        console.log( error );
      }
    )
  }

}
