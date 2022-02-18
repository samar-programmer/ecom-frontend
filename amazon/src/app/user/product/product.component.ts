import { Product } from './../../Model/product';


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product : Product = {};
  originalprice ?:string = ""; 
  count?:number;


  varientValue:any;

  previousVal:any;

  @Output() productAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {
  }

  ngOnInit(): void {
    this.originalprice = this.product.totalPrice;
    
  }

  addToCart() {
    this.productAddToCart.emit(this.product);
  }

  addExtraValues(value: any, event: any, tht: any, name:any) {
    tht.product.varients.forEach((element:any) => {
      element.varientvalues.forEach((val:any)=> {
        if(val.name == name){
          tht.product.totalPrice = Number(tht.product.totalPrice) - Number(this.previousVal);
          tht.product.totalPrice = Number(tht.product.totalPrice) + Number(value);
        }
        this.previousVal = val.price
      });
    });

  }

}



