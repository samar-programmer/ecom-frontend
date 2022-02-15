import { Router } from '@angular/router';
import { Cart } from './../../Model/cart';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartlist:any;
  totalSum: number = 0;
  constructor(private cartService: CartService, private route: Router) {

  }


  ngOnInit() {


    var email = localStorage.getItem("email")

    if (email == null) {
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
   let result = this.cartService.downloadPdf(localStorage.getItem("email"));

   result.subscribe({
    
    next:(response:any)=>{
      const blob =new Blob([response], {type:'application/pdf'});
      
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

   
  }
  });
}
}