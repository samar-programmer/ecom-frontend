import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { SigninupComponent } from './signinup/signinup.component';
import { SigninupService } from '../services/signinup.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { EditprofileComponent } from './editprofile/editprofile.component';



@NgModule({
  declarations: [
    
    SigninupComponent,
         ForgetpasswordComponent,
         RecoveryPasswordComponent,
         EditprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    SweetAlert2Module,
    HttpClientModule,
    MatSelectModule,
    RouterModule
  ],
  exports:[
    SigninupComponent,
    ForgetpasswordComponent,
    RecoveryPasswordComponent,
    EditprofileComponent
  ],
  providers:[
    SigninupService
  ]
})
export class SigninupModule { }
