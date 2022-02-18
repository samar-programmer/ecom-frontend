import { Product } from './../../Model/product';

import { ProductService } from './../../services/product.service';

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproductdialoug',
  templateUrl: './addproductdialoug.component.html',
  styleUrls: ['./addproductdialoug.component.css']
})
export class AddproductdialougComponent implements OnInit {

  productForm !: FormGroup;
  productId!: any;
  actionBtn = 'save';
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public editProduct: any,
    private dialogRef: MatDialogRef<AddproductdialougComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      imgsrc: ['', Validators.required],
      addeddate: ['', Validators.required],
      productPrice: ['', Validators.required],
      discountPercentage:[''],
      productDiscountPrice: ['', Validators.required],
      description: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      quantity: ['', Validators.required]


    });

    if (this.editProduct) {
      this.actionBtn = 'Update';
      this.productForm.controls['productName'].setValue(this.editProduct.productName);
      this.productForm.controls['category'].setValue(this.editProduct.category);
      this.productForm.controls['imgsrc'].setValue(this.editProduct.imgsrc);
      this.productForm.controls['addeddate'].setValue(this.editProduct.addeddate);
      this.productForm.controls['productPrice'].setValue(this.editProduct.productPrice);
      this.productForm.controls['productDiscountPrice'].setValue(this.editProduct.productDiscountPrice);
      this.productForm.controls['description'].setValue(this.editProduct.description);
      this.productForm.controls['brand'].setValue(this.editProduct.brand);
      this.productForm.controls['model'].setValue(this.editProduct.model);
      this.productForm.controls['quantity'].setValue(this.editProduct.quantity);
      this.productId = parseInt(this.editProduct.productId);
    }

  }

  addProduct() {
    let productName = this.productForm.value.productName;
    let category = this.productForm.value.category;
    let imgsrc = this.productForm.value.imgsrc;
    let addeddate = this.productForm.value.addeddate;
    let productPrice = this.productForm.value.productPrice;
    let productDiscountPrice = this.productForm.value.productDiscountPrice;
    let description = this.productForm.value.description;
    let brand = this.productForm.value.brand;
    let model = this.productForm.value.model;
    let quantity = this.productForm.value.quantity;
    let product: any;
    if (this.productId > 0) {
      product = new Product(this.productId, productName, category, imgsrc, addeddate, productPrice, productDiscountPrice, description, brand, model, quantity, '','','',[]);
      if (this.productForm.valid) {
        this.productService.addProduct(product, localStorage.getItem("email"))
          .subscribe({
            next: (response: any) => {
              if (response.successErrorType == "SUCCESS") {
                Swal.fire("Product Updated SuccessFully", "Product Updated Success Fully ", "success");
              }
              this.productForm.reset();
              this.dialogRef.close('save');
              product = null;
            },
            error: () => {
              Swal.fire("Product Updated SuccessFully", "Product Not Updated", "error");
            }
          })
      }
    } else {
      if (this.productForm.valid) {
        this.productService.addProduct(this.productForm.value, localStorage.getItem("email"))
          .subscribe({
            next: (response: any) => {
              if (response.successErrorType == "SUCCESS") {
                Swal.fire("Product Added SuccessFully",  response.message, "success");
              } else {
                Swal.fire("Unable to save product details",  response.message, "error");

              }
              this.productForm.reset();
              this.dialogRef.close('Update');
            },
            error: () => {
              Swal.fire("Unable to save product details", "Add Another Model" , "error");
            }
          })
      }
    }

  };
  
  calculateDiscountPrice(){
    let decimalVal = this.productForm.value.discountPercentage/100;
    let dicountPrice = decimalVal*this.productForm.value.productPrice;
    this.productForm.controls['productDiscountPrice'].setValue(dicountPrice);
    dicountPrice=0;
  }

}
