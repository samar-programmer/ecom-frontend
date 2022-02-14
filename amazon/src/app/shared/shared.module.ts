import { CommonService } from './../services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    MatDividerModule,
    

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
   
  ],
  providers:[
    CommonService
  ]
})
export class SharedModule { }
