export interface Product {
    id: number;
    name: string;
    type: number;
    brand: number,
    size: number,
    description : string;
    url : string;
    amount : number;
    season : string;
    additionalInfo : string;
    discount: number
  }
  export interface CartProduct extends Product {
    qty:number;
}
  
  