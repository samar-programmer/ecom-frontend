import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninupService {

  private baseUrl="http://localhost:10002/amazon/api/home/";

  constructor(private http:HttpClient) { }

  register(user:User){
    return this.http.post(this.baseUrl+'signup',user);
  }

  login(email:any,password:any){
    //let params = {user:email, email:password};
    let params = new HttpParams()
    .set('email', email)
    .set('password', password);
    return this.http.get(this.baseUrl+'login',{ params: params });
  }

  requestOtpFromRemote(user:User)
  {
      return this.http.post(this.baseUrl+"send-otp",user);    
  }

  verifyOtpFromRemote(user:User)
  {
      return this.http.post(this.baseUrl+"verify-otp",user,{responseType: 'text' as 'json'});
  }

  getProfile(email:any){
    let params = new HttpParams()
    .set('email',email);
    return this.http.post(this.baseUrl+"getprofile",params);    
  }

  editProfileChanges(user:User){
    return this.http.post(this.baseUrl+"editprofile",user); 
  }
}
