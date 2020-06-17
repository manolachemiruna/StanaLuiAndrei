import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images
  constructor() { }

  ngOnInit(): void {
    this.images=["https://calatorinbascheti.ro/wp-content/uploads/2019/03/fain11.jpg","https://calatorinbascheti.ro/wp-content/uploads/2019/03/fain2.jpg","https://calatorinbascheti.ro/wp-content/uploads/2019/03/taranomanda1.jpg","https://calatorinbascheti.ro/wp-content/uploads/2019/03/blacksheep2.jpg","https://sandalandala.ro/images/4239dm.jpg","https://calatorinbascheti.ro/wp-content/uploads/2019/03/cheia1.jpg","https://sandalandala.ro/files/editatGEG_0413-27857273611-1-920x614.jpg","https://www.exquis.ro/wp-content/uploads/2017/04/mancare-traditionala-romaneasca-990x660.jpg"];
  }

}


