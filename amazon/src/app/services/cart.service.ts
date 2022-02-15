import { Product } from './../Model/product';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl : string = 'http://localhost:10002/amazon/api/user/';
  constructor(private http: HttpClient) { }

  addToCart(product: Product, email:any ) {

    let params = new HttpParams()
    .set('productId', String(product.productId))
    .set('email', email)
    .set('total',String(product.totalPrice));

    return this.http.post<any>(this.baseUrl+"cart", params);
  }

  getCartItems(email:any){
    return this.http.get<any>(this.baseUrl+"cart" +"?email="+email);
  }

  updateCartItem(prodid: number, quant: number, email:any){
    var map = {
      "id":prodid,
      "quantity":quant,
      "email":email
    }
    return this.http.put<any>(this.baseUrl+"cart", map);
  }

  deleteCartItem(bufdid: number, email:any) {
    return this.http.delete<any>(this.baseUrl+"cart" + "?bufcartid=" + bufdid+"&email="+email);
  }


  downloadPdf(email:any){
    return this.http.get("http://localhost:10002/amazon/api/home/generatePdf?email="+email, {responseType:'blob'});
  }

}
