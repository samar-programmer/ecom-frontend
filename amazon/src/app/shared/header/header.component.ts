import { CommonService } from './../../services/common.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private route:Router,  private commonService:CommonService) { }
  userType:String ='';
  ngOnInit(): void {
    this.userType = this.commonService.userType;
  }
  
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  signOut(){
    localStorage.clear();
    this.commonService.userType='';
    this.route.navigate(['']);
  }


  gotoCartPage(){
    this.route.navigate(['./cart']);
  }

  gotoEditPage(){
    this.route.navigate(['./editprofile']);
  }
}