import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { from } from 'rxjs/observable/from';
import { ProfilePage } from './profile';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    Camera
  ]
})
export class ProfilePageModule {}
