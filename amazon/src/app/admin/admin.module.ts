import { ProductService } from './../services/product.service';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CommonService } from './../services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ProductComponent } from './product/product.component';
import { AddproductdialougComponent } from './addproductdialoug/addproductdialoug.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddVariantComponent } from './add-variant/add-variant.component';
import { VarientValuesComponent } from './varient-values/varient-values.component';
//import { AddproductdialogComponent } from './addproductdialog/addproductdialog.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AdminPageComponent,
    ProductComponent,
    AddproductdialougComponent,
    AddVariantComponent,
    VarientValuesComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule
    

    

  ],
  exports:[
    AdminPageComponent,
    ProductComponent,
    AddproductdialougComponent,
    AddVariantComponent,
    VarientValuesComponent
  ],
  providers:[
    ProductService
  ]
 
})
export class AdminModule { }
