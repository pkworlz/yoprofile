import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles : Profile [] = [];

  constructor(
    private storage: Storage
  ) { 
    this.getFromLocal();
  }



  get() {
    return this.profiles;
  }

  add(profile:Profile){
    this.profiles.push(profile);
    this.saveToLocal();
  }

  remove(profile: Profile) {
    let index = this.profiles.indexOf(profile);
    this.profiles.splice(index,1);
    console.log(this.profiles);
    this.saveToLocal();
  }


  // persistent features..
  private saveToLocal() {
    this.storage.set("ProfileKey", this.profiles);
  }

  private getFromLocal() {
    this.storage.get("ProfileKey").then((localProfiles) => {
      console.log(localProfiles);
      if (localProfiles === null) {
        this.profiles = [];
      } else {
        this.profiles = localProfiles;
      }
    });;
  }

}

export interface Profile {
  id: number;
  name: string;
  email: string;
  imageUrl?: string;
}
