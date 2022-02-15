import { VarientValues } from './../Model/varient-value';
import { ProductVarient } from './../Model/product-varient';
import { Product } from './../Model/product';


import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl : string = 'http://localhost:10002/amazon/api/admin/';
  constructor(private httpClient:HttpClient) { }


  addProduct (product:Product, email:any){
    product.email = email;
    let result:any = this.httpClient.post<any>( this.baseUrl+'product',product, );
    return result;
    
  }

  getAllProducts(){
    let result:any =this.httpClient.get( this.baseUrl+"products");
    return result;
  }

  getProductsForAdmin(email:any){
    let result:any =this.httpClient.get( this.baseUrl+"getProductsForAdmin"+"?email="+email);
    return result;
  }

  deleteProduct(id:number){
    let result:any = this.httpClient.delete( this.baseUrl+"product/"+id);
    return result;
  }

  deleteVarient(id:any){
    let result:any = this.httpClient.delete( this.baseUrl+"varient/"+id);
    return result;
  }
  
  deleteVarientValue(id:any){
    let result:any = this.httpClient.delete( this.baseUrl+"varientvalue/"+id);
    return result;
  }
  


  addVarient(productId:any, value:any, email:any){
    
    let params = new HttpParams()
    .set('productId', productId)
    .set('value', value)
    .set('email',email);
    let result:any = this.httpClient.post( this.baseUrl+'varient',params);
    return result;
  }

  addVarientValues(varientId:any, name:any, price:any, email:any){
    
    let params = new HttpParams()
    .set('varientId', varientId)
    .set('name', name)
    .set('price', price)
    .set('email', email);
    let result:any = this.httpClient.post( this.baseUrl+'varientvalue',params);
    return result;
  }
  


  editVarient(variant:ProductVarient, email:any){
    variant.email = email;
    let result:any = this.httpClient.put( this.baseUrl+'varient',variant);
    return result;
  }

  editVarientValues(variantvalues:VarientValues, email:any){
    variantvalues.email = email;
    let result:any = this.httpClient.put( this.baseUrl+'varientvalue',variantvalues);
    return result;
  }
  
  
  
  
}
