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
  dateValue = '';
  dateValue2 = '';

  constructor(public modalCtrl: ModalController) {}

  date = new Date();
  myDate: String = new Date(this.date.getTime() - 
                   this.date.getTimezoneOffset()*60000).toISOString();
  
  ngOnInit() {
  }
}
