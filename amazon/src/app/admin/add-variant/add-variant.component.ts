import { Component, OnInit, Inject } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from './../../services/product.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { products } from 'src/app/Model/product';
import { productvarient } from 'src/app/Model/productvarient';

@Component({
  selector: 'app-add-variant',
  templateUrl: './add-variant.component.html',
  styleUrls: ['./add-variant.component.css']
})
export class AddVariantComponent implements OnInit {

  productForm !: FormGroup;
  varientId: any;
  actionBtn = 'save';

  pro: any;

  editcheck: any;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public editProduct: any,
    private dialogRef: MatDialogRef<AddVariantComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      category: ['', Validators.required],

    });

    if (this.editProduct) {
      console.log(this.editProduct);
      this.productForm.controls['productId'].setValue(this.editProduct.productId);
      this.productForm.controls['category'].setValue(this.editProduct.value);
      console.log("inside check" + parseInt(this.editProduct.varientId))
      this.varientId = parseInt(this.editProduct.varientId);
    }


  }

  addProduct() {
    console.log("varient i d" + this.varientId);
    let productId = this.productForm.value.productId;
    let category = this.productForm.value.category;

    let product: any;
    if (this.varientId > 0) {
      if (this.productForm.valid) {
        this.pro = new productvarient(this.editProduct.varientId, this.productForm.value.productId, this.productForm.value.category)
        this.productService.editVarient(this.pro, localStorage.getItem("email"))
          .subscribe({
            next: (response: any) => {

              this.productForm.reset();
              this.dialogRef.close('Update');
              this.pro = '';
            },
            error: () => {
              alert("error");
            }
          })
      }
    } else {
      if (this.productForm.valid) {
        this.productService.addVarient(productId, category, localStorage.getItem("email"))
          .subscribe({
            next: (response: any) => {

              this.productForm.reset();
              this.dialogRef.close('save');
              product = null;
            },
            error: () => {
              alert("error");
            }
          })
      }
    }

  };

}
