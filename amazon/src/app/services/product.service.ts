import { productvarient } from './../Model/productvarient';
import { products } from './../Model/product';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { varientvalues } from '../Model/varientvalues';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl : string = 'http://localhost:10002/amazon/api/admin/';
  constructor(private httpClient:HttpClient) { }

  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': ' http://localhost:10002',
  //     'Access-Control-Allow-Headers': 'Content-Type Authorization' ,
  //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  //   })
  // };

   

  addProduct (product:products, email:any){
    product.email = email;
    let result:any = this.httpClient.post<any>( this.baseUrl+'addProduct',product, );
    return result;
    
  }

  getAllProducts(){
    let result:any =this.httpClient.get( this.baseUrl+"getProducts");
    return result;
  }

  getProductsForAdmin(email:any){
    let result:any =this.httpClient.get( this.baseUrl+"getProductsForAdmin"+"?email="+email);
    return result;
  }

  deleteProduct(id:number){
    let result:any = this.httpClient.delete( this.baseUrl+"deleteProduct/"+id);
    return result;
  }

  deleteVarient(id:any){
    let result:any = this.httpClient.delete( this.baseUrl+"deleteVarient/"+id);
    return result;
  }
  
  deleteVarientValue(id:any){
    let result:any = this.httpClient.delete( this.baseUrl+"deleteVarientValue/"+id);
    return result;
  }
  


  addVarient(productId:any, value:any, email:any){
    console.log("add");
    
    let params = new HttpParams()
    .set('productId', productId)
    .set('value', value)
    .set('email',email);
    let result:any = this.httpClient.post( this.baseUrl+'addVarient',params);
    return result;
  }

  addVarientValues(varientId:any, name:any, price:any, email:any){
    
    let params = new HttpParams()
    .set('varientId', varientId)
    .set('name', name)
    .set('price', price)
    .set('email', email);
    let result:any = this.httpClient.post( this.baseUrl+'addVarientValues',params);
    return result;
  }
  


  editVarient(variant:productvarient, email:any){
    console.log("edit");
    variant.email = email;
    let result:any = this.httpClient.post( this.baseUrl+'editVarient',variant);
    return result;
  }

  editVarientValues(variantvalues:varientvalues, email:any){
    variantvalues.email = email;
    console.log("edit");
    debugger
    let result:any = this.httpClient.post( this.baseUrl+'editVarientValues',variantvalues);
    return result;
  }
  
  
  
  
}
