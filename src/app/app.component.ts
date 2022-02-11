import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor(public router:Router) {}
  login(){
    this.router.navigateByUrl('/login')
  }
  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Other pages',
  //     cssClass: 'my-custom-class',
  //     buttons: [{
  //       text: 'Login',
  //       role: 'log-in',
  //       icon: 'log-in',
  //       id: 'log-in',
      
  //       data: {
  //         type: 'log-in'
  //       },
  //       handler: () => {
  //         console.log('log-in');
  //       }
  //      }, {
  //     //   text: 'Share',
  //     //   icon: 'share',
  //     //   data: 10,
  //     //   handler: () => {
  //     //     console.log('Share clicked');
  //     //   }
  //      },
  //     ]
  //   });
  //   await actionSheet.present();

  //   const { role, data } = await actionSheet.onDidDismiss();
  //   console.log('onDidDismiss resolved with role and data', role, data);
  // }

}


