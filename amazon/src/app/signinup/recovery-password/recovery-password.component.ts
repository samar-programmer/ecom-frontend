import { Router } from '@angular/router';
import { User } from './../../Model/User';
import { SigninupService } from './../../services/signinup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {
  user = new User();
  constructor(private service : SigninupService, private route:Router) { }

  ngOnInit(): void {
  }


  verifyOtp()
  {
      var result=this.service.verifyOtpFromRemote(this.user);

        result.subscribe((data:any)=>{
        
        if(data.toString()=="Success")
        {
          this.route.navigate(['']);
        }
        else
        {
          this.route.navigate(['./home']);
        }
      });
}
}