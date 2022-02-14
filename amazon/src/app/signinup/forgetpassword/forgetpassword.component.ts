import { Router } from '@angular/router';
import { SigninupService } from './../../services/signinup.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';

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

      result.subscribe((data:any)=>{console.log(data)
      
      if(data.toString()=="Verify")
      {
        // <a [RouterLink]="['./home']"></a>
        this.route.navigate(['./recovery-password']);
      }
      else
      {
        this.route.navigate(['./home']);
      }
    });

}
}