import { Router } from '@angular/router';
import { SigninupService } from './../../services/signinup.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  user=new User();

  constructor(private signinupservice : SigninupService, private route:Router) { }

  ngOnInit(): void {
  }

  requestOtp()
  {
    var result=this.signinupservice.requestOtpFromRemote(this.user);

    result.subscribe({
      next:(response:any)=>{
        console.log(response);
        if(response.status=="SUCCESS")
        {
          this.route.navigate(['./recovery-password']);
          
          localStorage.setItem("email",this.user.email);
        }
        else
        {
          Swal.fire("Error occurs while sending otp", response.message, "error");
          this.route.navigate(['']);
        }
      },
      
    })

     

}
}