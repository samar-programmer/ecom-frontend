import { Product } from './../../Model/product';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ElementRef, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product : Product = {};
  @Output() productAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {


  }




  ngOnInit(): void {
    console.log( this.product)
    console.log("product type");
    console.log( this.product)
    
  }

  addToCart() {
    this.productAddToCart.emit(this.product);
  }

  addExtraValues(value: any, event: any, tht: any) {
    if (event.target.checked) {
      tht.product.totalPrice = Number(tht.product.productDiscountPrice) + Number(value);
    } else {
      tht.product.totalPrice = Number(tht.product.productDiscountPrice) - Number(value);
    }

  }

  addExtraValuescheck(value: any, event: any, tht: any) {
    if (event.target.checked) {
      tht.product.totalPrice = Number(tht.product.totalPrice) + Number(value);
    } else {
      tht.product.totalPrice = Number(tht.product.totalPrice) - Number(value);
    }

  }



}



