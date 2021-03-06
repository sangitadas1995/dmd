import { Injectable } from '@angular/core';
import { LoadingController, ToastController ,ModalController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public loadingController: LoadingController,
  	public toastController: ToastController, public modalcontroller:ModalController) { }
    async Toast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2500
      });
      toast.present();
    }
  
    async present() {
      const loading = await this.loadingController.create({
        spinner: 'lines',
        message: 'Please wait...',
        translucent: true
      });
      return await loading.present();
    }
  
    async dismiss() {
      //this.isLoading = false;
      setTimeout(()=>{
        return this.loadingController.dismiss();
      },1000);
    }

    async modaldismiss() {
      //this.isLoading = false;
      setTimeout(()=>{
        return  this.modalcontroller.dismiss();
      },100);
    }
    async productDetails() {
      //this.isLoading = false;
      setTimeout(()=>{
        return  this.modalcontroller.dismiss();
      },100);
    }
   
}
