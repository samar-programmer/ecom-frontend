import { User } from './../../Model/User';


import { Component, OnInit } from '@angular/core';
import { SigninupService } from 'src/app/services/signinup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
 
  user=new User();

  constructor(private signinupService: SigninupService, private route: Router) { }

  ngOnInit(): void {

    var email=localStorage.getItem("email")
 
    if(email==null){
  
    this.route.navigate(['']);
    }


      let result =this.signinupService.getProfile(localStorage.getItem("email"));
      result.subscribe({
        next:(response:any)=>{
          this.user = response.user;
        },
        
      })
      
    }

    editProfileChanges(){
      let result =this.signinupService.editProfileChanges(this.user);
      result.subscribe({
        next:(response:any)=>{
          alert("profile Edited success Fully");
        },
        
      })
    }
    

}
