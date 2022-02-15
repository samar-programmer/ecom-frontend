import { Product } from './../../Model/product';

import { CartService } from './../../services/cart.service';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  products: Product[] = [];
  totalCartItems:any;
  constructor(private productService: ProductService, private cartservice: CartService, private route:Router) { }

  ngOnInit(): void {

    this.cartservice.getCartItems(localStorage.getItem("email"))
    .subscribe({
      next:(response:any)=>{
         if(response.oblist.length > 0){
          this.totalCartItems = response.oblist.length;
         }else{
          this.totalCartItems = "0 Items"
         }
        
       
      },
     
    })


    this.productService.getAllProducts()
    .subscribe({
      next:(response:any)=>{
        if(response.successErrorType == "SUCCESS"){
          this.products= response.productList;
        //  for(let product of response.productList ){
        //  }
        }
       
      },
     
    })

    


    
    }

    addToCart(e:any) {
      this.cartservice.addToCart(e, localStorage.getItem("email")).subscribe((response:any) => {
        Swal.fire("Product Added to cart","<b>status code :</b> "+response.status+", <b>status message :</b> " +response.message,"success");
        
        this.cartservice.getCartItems(localStorage.getItem("email"))
    .subscribe({
      next:(response:any)=>{
         if(response.oblist.length > 0){
          this.totalCartItems = response.oblist.length;
         }else{
          this.totalCartItems = "0 Items"
         }
        
       
      },
     
    })
      })
    }
}
