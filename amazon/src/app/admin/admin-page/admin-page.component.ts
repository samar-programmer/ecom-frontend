import { CommonService } from './../../services/common.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  sideBarOpen: any;

  ngOnInit(): void {
  }

  sideBarToggler() {
    console.log("sasi");
    this.sideBarOpen = !this.sideBarOpen;
  }


}
