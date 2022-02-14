import { NumberValueAccessor } from '@angular/forms';

export class products{
    constructor(
        public productId?:number,
        public productName?: string,
        public category?: string,
        public imgsrc?: string,
        public addeddate?: string,
        public productPrice?: string,
        public productDiscountPrice?: string,
        public description?:string,
        public brand?:string,
        public model?:string,
        public quantity?:string,
        public totalPrice?:string,
        public radiocheck?:string,
        public email?:String,
        ) {}
}