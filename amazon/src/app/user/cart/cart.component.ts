import { Router } from '@angular/router';
import { Cart } from './../../Model/cart';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartlist: any;
  totalSum: number = 0;
  constructor(private cartService: CartService, private route: Router) {

  }


  ngOnInit() {


    var email = localStorage.getItem("email")

    if (email == null) {
      console.log("No Email");

      this.route.navigate(['']);
    }



    this.cartService.getCartItems(localStorage.getItem("email")).subscribe((response: any) => {
      this.cartlist = response.oblist;
      this.cartlist.forEach((value: any) => {
        this.totalSum = this.totalSum + (value.quantity * value.total);
      });
    });

  }

  gotohomepage() {
    this.route.navigate(['./user']);
  }
  updateCart(id: any, quantity: any) {
    this.cartService.updateCartItem(id.value, quantity.value, localStorage.getItem("email")).subscribe((res: any) => {
      this.cartlist = res.oblist;
      this.totalSum = 0;
      this.cartlist.forEach((value: any) => {

        this.totalSum = this.totalSum + (value.quantity * value.total);
      });
    });
  }
  deleteItem(id: any) {
    this.cartService.deleteCartItem(id.value, localStorage.getItem("email")).subscribe((res: any) => {
      this.cartlist = res.oblist;
      this.totalSum = 0;
      this.cartlist.forEach((value: any) => {

        this.totalSum = this.totalSum + (value.quantity * value.total);
      });
    });
  }


  public convetToPDF() {
    debugger;
    // var data: any = document.getElementById('contentToConvert');
    // html2canvas(data).then(canvas => {
    //   var imgWidth = 208;
    //   var pageHeight = 295;
    //   var imgHeight = canvas.height * imgWidth / canvas.width;
    //   var heightLeft = imgHeight;

    //   const contentDataURL = canvas.toDataURL('image/png')
    //   let pdf: any = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    //   var position = 0;
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //   pdf.save('new-file.pdf'); // Generated PDF
    // });

   let result = this.cartService.downloadPdf(localStorage.getItem("email"));

   result.subscribe({
    
    next:(response:any)=>{
      const blob =new Blob([response], {type:'application/pdf'});
      // if(window.navigator && window.navigator.msSaveOrOpenBlob){
      //   window.navigator.msSaveOrOpenBlob(blob);
      //   return;
      // }
     
        
       const data = window.URL.createObjectURL(blob);
       const link =document.createElement('a');
       link.href = data;
       link.download = 'cart.pdf'
       link.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true, view:window}));
      

       setTimeout(function(){
         window.URL.revokeObjectURL(data);
         link.remove();
       },100
       )

       
      // window.navigator.msSaveOrOpenBlob(blob);
      
   
  }
  });
}
}