import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles : Profile [] = [
    {
      id : 1,
      name : "Prem Kumar",
      email : "pkworlz@gmail.com",
    }
  ];

  constructor() { }

  get() {
    return this.profiles;
  }

  add(profile:Profile){
    this.profiles.push(profile);
  }

  remove(profile: Profile) {
    let index = this.profiles.indexOf(profile);
    this.profiles.splice(index,1);
    console.log(this.profiles);
    
  }

}

export interface Profile {
  id: number;
  name: string;
  email: string;
  imageUrl?: string;
}
