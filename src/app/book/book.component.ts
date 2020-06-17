import { Component, OnInit } from '@angular/core';
import { NgbModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  firstname=''
  lastname=''
  email=''
  message=''
  alertMessage
  targetDate1:NgbDateStruct
  targetDate2:NgbDateStruct
  value=250;

  constructor(config: NgbProgressbarConfig) {
  
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
  ngOnInit(): void {

    this.value=250;
  }

  verifyDate()
 {
   if(this.targetDate1.year>this.targetDate2.year|| this.targetDate1.month>this.targetDate2.month ||this.targetDate1.day>this.targetDate2.day && !(this.targetDate1.month<this.targetDate2.month))
  {
    this.alertMessage='Va rugam introduceti o perioada valida!';
    this.message='';
    return false;
  }
  return true;

 }
  createABook()
  {
    console.log(this.verifyDate());

    if(this.verifyDate())
    {
      this.message='Rezervarea a fost facuta cu succes!In scurt timp vei primi un email de confirmare.';
      this.alertMessage='';
      this.value=1000;
    }

  }

}
