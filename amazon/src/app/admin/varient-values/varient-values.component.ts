
import { Component, OnInit, Inject } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from './../../services/product.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VarientValues } from 'src/app/Model/varient-value';


@Component({
  selector: 'app-varient-values',
  templateUrl: './varient-values.component.html',
  styleUrls: ['./varient-values.component.css']
})
export class VarientValuesComponent implements OnInit {

  productForm !: FormGroup;
  varientValuesId: any;
  actionBtn = 'save';

  pro: any;

  editcheck: any;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public editProduct: any,
    private dialogRef: MatDialogRef<VarientValuesComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      varientId: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],

    });

    if (this.editProduct) {
      this.productForm.controls['varientId'].setValue(this.editProduct.varientId);
      this.productForm.controls['name'].setValue(this.editProduct.name);
      this.productForm.controls['price'].setValue(this.editProduct.price);
      this.varientValuesId = parseInt(this.editProduct.varientValuesId);
    }


  }

  addProduct() {

    let varientId = this.productForm.value.varientId;
    let name = this.productForm.value.name;
    let price = this.productForm.value.price;

    let product: any;
    if (this.varientValuesId > 0) {
      if (this.productForm.valid) {
        this.pro = new VarientValues(this.varientValuesId, this.productForm.value.varientId, this.productForm.value.name, this.productForm.value.price)
        this.productService.editVarientValues(this.pro, localStorage.getItem("email"))
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
        this.productService.addVarientValues(varientId, name, price, localStorage.getItem("email"))
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
