import { EditprofileComponent } from './signinup/editprofile/editprofile.component';
import { ForgetpasswordComponent } from './signinup/forgetpassword/forgetpassword.component';
import { CartComponent } from './user/cart/cart.component';
import { ProductComponent } from './admin/product/product.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninupComponent } from './signinup/signinup/signinup.component';
import { RecoveryPasswordComponent } from './signinup/recovery-password/recovery-password.component';

const routes: Routes = [
  {path:"",component:SigninupComponent},
  {path:"admin", component:AdminPageComponent},
  {path:"user", component:UserPageComponent},
  {path:"cart", component:CartComponent},
  {path:"forget", component:ForgetpasswordComponent},
  {path:"recovery-password", component:RecoveryPasswordComponent},
  {path:"editprofile", component:EditprofileComponent}


  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
