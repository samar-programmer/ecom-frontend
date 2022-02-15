import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './../services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    UserPageComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
  ],
  exports:[
    UserPageComponent
  ],
  providers:[
    CommonService,
    
  ]
})
export class UserModule { }
