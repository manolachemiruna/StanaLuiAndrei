import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mesaj=''
  subiect=''
  name=''
  email=''
  message=''
  constructor() { }

  ngOnInit(): void {
  }

  contact()
  {
    this.message='Mesajul tau a fost trimis cu succes!'
  }

}
