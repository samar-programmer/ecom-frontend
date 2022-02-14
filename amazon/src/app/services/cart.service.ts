import { HttpClient } from '@angular/common/http';
import { products } from './../Model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl : string = 'http://localhost:10002/amazon/api/user/';
  constructor(private http: HttpClient) { }

  addToCart(product: products, email:any ) {
    return this.http.get<any>(this.baseUrl+"addToCart" +"?productId="+product.productId+"&email="+email+"&total="+product.totalPrice);
  }

  getCartItems(email:any){
    return this.http.get<any>(this.baseUrl+"viewCart" +"?email="+email);
  }

  updateCartItem(prodid: number, quant: number, email:any){
    var map = {
      "id":prodid,
      "quantity":quant,
      "email":email
    }
    return this.http.put<any>(this.baseUrl+"updateCart", map);
  }

  deleteCartItem(bufdid: number, email:any) {
    return this.http.delete<any>(this.baseUrl+"delCart" + "?bufcartid=" + bufdid+"&email="+email);
  }


  downloadPdf(email:any){
    return this.http.get("http://localhost:10002/amazon/api/home/generatePdf?email="+email, {responseType:'blob'});
  }

}
