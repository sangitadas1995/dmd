import { Component, OnInit,ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
//import { format, parseISO } from 'date-fns';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
 

  constructor(public modalCtrl: ModalController) {console.log(this.myDate)}

  // time// array//
   timesidule=[
    {
      time:"10.00",
    },
    {
      time:"11.00",
    }
  ]
  
//past date disable fiexd//
date = new Date();
  minDate =  new Date(this. date.getTime() - 
              this.date.getTimezoneOffset()*60000).toISOString();

  // time local fiexd//
  
  myDate: String = new Date(this.date.getTime() - 
                   this.date.getTimezoneOffset()*60000).toISOString();
                              

  // data get//
  datechange(value){
    console.log(value)

  }
 //time//
 timedata(){
  console.log("hi")
 }

  ngOnInit() {}
  
}
