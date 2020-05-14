import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ok } from 'assert';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  username: string;

  constructor(public afAuth: AngularFireAuth, private router: Router, public alertctrl: AlertController,) { }

  ngOnInit() {
  }
  async Login() {
    const {email, password } = this;
    try {

      const res = await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.Alertcontrol('Success', 'You have successfully Logged in');
        this.router.navigate(['/spaceflight']);
      })
    } catch (err) {
      console.log(err);
      if (err.code === 'auth/user-not-found') {
        console.log('user not found');
      }
    }
  }
    async Alertcontrol(header: string, message: string) {
      const Controller = await this.alertctrl.create({
        header,
        message,
        buttons: [
          {
            text: 'Ok',
            role: 'ok',
            handler: () => {
              this.router.navigate(['/spaceflight']);
            }
          }
        ]
      });
    }


}
