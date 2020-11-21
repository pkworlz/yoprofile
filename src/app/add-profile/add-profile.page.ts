import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Profile, ProfileService } from '../services/profile.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private profileService : ProfileService,
    private navCtrl: NavController,
    private camera: Camera,

  ) { }


  ngOnInit() {
    this.newProfile.imageUrl = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }

  takePicture() {

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.newProfile.imageUrl = base64Image;
      
     }, (err) => {
      // Handle error
      console.log(err);
      
     });
  }

  submitProfile() {
    this.profileService.add(this.newProfile);
    this.navCtrl.back();
  }

}
