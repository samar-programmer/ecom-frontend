import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen=false;
  title = 'amazon';

  sideBarToggler() {
    console.log("sasi");
    this.sideBarOpen = !this.sideBarOpen;
  }

  sideBarTogglerForAdmin(){
    console.log("insideAdmin");
  }
}
