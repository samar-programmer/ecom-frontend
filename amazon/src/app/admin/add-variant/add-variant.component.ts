import { ProductVarient } from './../../Model/product-varient';
import { Component, OnInit, Inject } from '@angular/core';

import { ProductService } from './../../services/product.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
      model: ['', Validators.required],
      category: ['', Validators.required],

    });

    if (this.editProduct) {
      this.productForm.controls['productId'].setValue(this.editProduct.productId);
      this.productForm.controls['category'].setValue(this.editProduct.value);
      this.productForm.controls['model'].setValue(this.editProduct.model);
      this.varientId = parseInt(this.editProduct.varientId);
    }


  }

  addProduct() {
    let productId = this.productForm.value.productId;
    let category = this.productForm.value.category;
    let model = this.productForm.value.model;

    let product: any;
    if (this.varientId > 0) {
      if (this.productForm.valid) {
        this.pro = new ProductVarient(this.editProduct.varientId, this.productForm.value.productId, this.productForm.value.category, this.productForm.value.model)
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
        this.productService.addVarient(productId, category, model, localStorage.getItem("email"))
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
