import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { profile } from 'console';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {

  newProfile: Profile = {
    id: 1,
    name: "",
    email: "",
    imageUrl: ""
  };

  constructor(
    private profileService : ProfileService,
    private navCtrl: NavController,

  ) { }


  ngOnInit() {
    this.newProfile.imageUrl = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }

  submitProfile() {
    this.profileService.add(this.newProfile);
    this.navCtrl.back();
  }

}
