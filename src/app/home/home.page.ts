import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    public profileService : ProfileService,

    ) {}

  addProfile() {
    console.log("addProfile");
    this.goToAddProfile();
  }

  goToAddProfile() {
    this.navCtrl.navigateForward("add-profile");
  }

}
