import { Injectable } from '@angular/core';
import { Product,CartProduct } from './product';
import { Subject }    from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {  

  private cartUpdates = new Subject();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:CartProduct[] =[];
  public get count():number{
    return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
    
  }; 
  constructor() { }

  add(product:Product)
  {
   let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;
   if(item){ item.qty ++ } 
   else 
   {
     var prod = (product as CartProduct);
     prod.qty = 1;
     this.cartItmes.push(prod)
   }

   this.cartUpdates.next(this.cartItmes)
   //test
   
  }

}