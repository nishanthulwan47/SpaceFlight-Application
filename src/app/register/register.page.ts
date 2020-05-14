import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { SpaceflightsService } from '../spaceflights.service';
import { RouterModule, Routes, Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  password: string;
  ConfirmPassword: string;
  email: string;
  ConfirmEmail: string;
  alertController: any;

  constructor(public afAuth: AngularFireAuth, public alertctrl: AlertController, public spaceflightsService: SpaceflightsService,
              private router: Router,
              public presentalert: AlertController) { }

  ngOnInit() {
  }

  async Signup() {
    const {username, password, ConfirmPassword, email } = this;
    if (password !== ConfirmPassword) {
      this.presentAlert('Error', 'Password is incorrect');
      return console.log('password is incorrect');
    }
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('result');
      this.spaceflightsService.createUserDetails(this.email, this.username, true, new Date().getTime())
      .then(() => {
        this.Alertcontrol('Success', 'You have successfully Signed up');
      })
      .catch(error => {
        console.log('Signup Successful');
        this.Alertcontrol('Error', error.message);
      });
    } catch (error) {
        console.log('Signup Successful');
        this.Alertcontrol('Error', error.message);
    }
}
 async Alertcontrol(header: string, message: string ) {
  const alertctrl = await this.alertctrl.create({
    header,
    message,
    buttons: [
      {
        text: 'Ok',
        role: 'ok',
        handler: () => {
          this.router.navigate(['/']);
        }

      }
    ]

  });

  await alertctrl.present();

  }

    async presentAlert(header: string, message: string) {
      const presentalert = await this.presentalert.create({
        header,
        message,
        buttons: [{
          text: 'Ok',
          role: 'ok',
        }]
      });

      await presentalert.present();
    }
}
