import { VarientValuesComponent } from './../varient-values/varient-values.component';
import { AddVariantComponent } from './../add-variant/add-variant.component';
import { ProductService } from './../../services/product.service';
import { AddproductdialougComponent } from './../addproductdialoug/addproductdialoug.component';

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'category', 'brand', 'model', 'quantity', 'productPrice', 'productDiscountPrice', 'description', 'addeddate', 'action'];
  dataSource!: MatTableDataSource<any>;

  displayedColumnsVarient: string[] = ['varientId', 'productId', 'value', 'action'];
  dataSourceVarient!: MatTableDataSource<any>;

  displayedColumnsVarientValues: string[] = ['varientValuesId', 'varientId', 'name', 'price', 'action'];
  dataSourceVarientValues!: MatTableDataSource<any>;



  editDialougCloseCheck: number = 0;
  deleteCheck: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginatorvarient!: MatPaginator;
  @ViewChild(MatSort) sortvarient!: MatSort;


  @ViewChild(MatSort) sortvarientValues!: MatSort;

  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsForAdmin();
  }

  openDialog() {
    this.dialog.open(AddproductdialougComponent, {
      width: '35%'
    }).afterClosed().subscribe((val: any) => {
      this.editDialougCloseCheck = 10;
      this.getProductsForAdmin();
    });
  }

  editProduct(row: any) {
    this.dialog.open(AddproductdialougComponent, {
      width: '35%',
      data: row
    }).afterClosed().subscribe((val: any) => {
      console.log("sasi");
      this.editDialougCloseCheck = 10;
      this.getProductsForAdmin();

    });;
  }

  editVarient(row: any) {
    this.dialog.open(AddVariantComponent, {
      width: '35%',
      data: row
    }).afterClosed().subscribe((val: any) => {
      console.log("sasi");
      this.editDialougCloseCheck = 10;
      this.getProductsForAdmin();

    });
  }

  editVarientValue(row: any) {
    this.dialog.open(VarientValuesComponent, {
      width: '35%',
      data: row
    }).afterClosed().subscribe((val: any) => {
      console.log("sasi");
      this.editDialougCloseCheck = 10;
      this.getProductsForAdmin();

    });
  }




  // onSuccess1(){
  //   this.notificationsService.success('Success', "response.toString()", {
  //     position:['top','left'],
  //     timeOut:2000,
  //     animate:'fade',
  //     showProgressBar:true });
  // }

  getProductsForAdmin() {
    this.productService.getProductsForAdmin(localStorage.getItem("email"))
      .subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.successErrorType = "SUCCESS") {
            this.dataSource = new MatTableDataSource(response.productList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            this.dataSourceVarient = new MatTableDataSource(response.varientList);
            this.dataSourceVarient.sort = this.sortvarient;

            this.dataSourceVarientValues = new MatTableDataSource(response.varientValuesList);
            this.dataSourceVarientValues.sort = this.sortvarientValues;
            if (this.editDialougCloseCheck == 0 && this.deleteCheck == 0) {
              Swal.fire("Product Retrived SuccessFully", "<b>status code :</b> " + response.status + ", <b>status message :</b> " + response.message, "success");

            }
            this.editDialougCloseCheck = 0;
            this.deleteCheck = 0;
          } else {
            Swal.fire("Product Not Retrived", "<b>status code :</b> " + response.status + ", <b>status message :</b> " + response.message, "error");
          }
        },

      })
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe({
        next: (response: any) => {
          if (response.successErrorType = "SUCCESS") {
            this.deleteCheck = 10;
            Swal.fire("product Deleted successfully", "<b>status code :</b> " + response.status + ", <b>status message :</b> " + response.message, "success");
          }
          this.getProductsForAdmin();

        },
        error: () => {
          alert("error");
        }
      })
  }

  deleteVarient(varientId: any) {
    this.productService.deleteVarient(varientId)
      .subscribe({
        next: (response: any) => {
          this.getProductsForAdmin();
        },
        error: () => {
          alert("error");
        }
      })
  }

  deleteVarientValue(VarientValuesId: any) {
    this.productService.deleteVarientValue(VarientValuesId)
      .subscribe({
        next: (response: any) => {
          this.getProductsForAdmin();
        },
        error: () => {
          alert("error");
        }
      })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  applyFilterVarient(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVarient.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceVarient.paginator) {
      this.dataSourceVarient.paginator.firstPage();
    }
  }

  applyFilterVarientValues(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVarientValues.filter = filterValue.trim().toLowerCase();
  }


  addVarient(row: any) {
    this.dialog.open(AddVariantComponent, {
      width: '35%',
      data: row
    }).afterClosed().subscribe((val: any) => {
      this.editDialougCloseCheck = 10;
      this.getProductsForAdmin();
    });
  }

  addVarientValues(row: any) {
    this.dialog.open(VarientValuesComponent, {
      width: '35%',
      data: row
    }).afterClosed().subscribe((val: any) => {
      this.editDialougCloseCheck = 10;
      this.getProductsForAdmin();
    });
  }



}
