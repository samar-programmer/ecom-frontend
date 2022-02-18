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
  totalCartItems:any = "";
  constructor(private productService: ProductService, private cartservice: CartService, private route:Router) { }

  ngOnInit(): void {

    this.cartservice.getCartItems(localStorage.getItem("email"))
    .subscribe({
      next:(response:any)=>{
         if(response.oblist.length > 0){
          //this.totalCartItems = response.oblist.length;
          response.oblist.forEach((element:any) => {
            debugger
            this.totalCartItems = Number(this.totalCartItems)+element.quantity;
          });


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
        
        }
       
      },
     
    })

    


    
    }

    addToCart(e:any) {
      this.cartservice.addToCart(e, localStorage.getItem("email")).subscribe((response:any) => {
       
        if("ERROR"==response.successErrorType){
          Swal.fire("Product Exist", response.message,"error");
        }else{
          Swal.fire("Product Added", response.message,"success");
        }
       
        
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

    gotoCartPage(){
      this.route.navigate(['./cart']);
    }
}
