import { VarientValues } from './varient-value';

export class ProductVarient{
    constructor(
        public varientId?:number,
        public productId?: string,
        public value?: string,
        public model?: string,
        public email?:string,
        public varientvalues?:VarientValues[]
        ) {}
}