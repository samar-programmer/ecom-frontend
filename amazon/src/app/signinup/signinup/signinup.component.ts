import { CommonService } from './../../services/common.service';
import { SigninupService } from './../../services/signinup.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit {

  user = new User();

  //For Login
  log_email:any;
  log_password:any;

  //ForRegister
  

  hide = true;  
  constructor(private signinupService:SigninupService,private route:Router, private commonService:CommonService) { }

  ngOnInit(): void {
  }

  login(){
    let result =this.signinupService.login(this.log_email,this.log_password);
    result.subscribe({
      next:(response:any)=>{
        if(response.successErrorType == "SUCCESS"){
          Swal.fire("Login Success",response.message,"success");
          localStorage.setItem("email", this.log_email);
          localStorage.setItem("role", response.userType);
          this.log_email = null;
          this.log_password = null;
          this.commonService.userType= response.userType;
          if(response.userType == "ADMIN"){
            this.route.navigate(['./admin']);
          }else{
            this.route.navigate(['./user']);
          }
          
        }else{
          Swal.fire("Login failed",response.message,"error");
        }
        
      },
      
    })
  }

  register(){
    let result =this.signinupService.register(this.user);
    result.subscribe({
      next:(response:any)=>{
        if(response.successErrorType == "SUCCESS"){
          Swal.fire("Register Success",response.message,"success");
          this.user = {} as User;
          //this.route.navigate(['']);
        }else{
          Swal.fire("SignUp failed",response.message,"error");
        }
      },
      
    })
    
  }

}
