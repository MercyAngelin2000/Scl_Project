import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { SampleComponent } from './sample/sample.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:"",
    component:LoginpageComponent,
    pathMatch:"full"
  },
  {
    path:'register',component:RegisterpageComponent
  },
  
  {path:'home',component:HomepageComponent,
      children:[
        {path:'userprofile',component:UserProfileComponent},
        {path:'sclprofile',component:GeneralInfoComponent},
      ]},
  {path:'sample',component:SampleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
