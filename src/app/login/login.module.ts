import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
