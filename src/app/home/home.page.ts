import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string | undefined;
    password: string | undefined;
  
    constructor(private navCtrl: NavController) {}
  
    onSubmit() {
      if (this.username === 'Usuario1' && this.password === 'MiClav3') {
        this.navCtrl.navigateForward('/home');
      } else {
        alert('Usuario o clave incorrectos');
      }
    }
  
    resetPassword() {
      alert('Correo de recuperación enviado');
    }
  }

