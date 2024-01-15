import { Component,Input, OnInit } from '@angular/core';
import { Product } from '../../product';
import { NgFor} from "@angular/common";
import { UtilsServiceService } from '../../utils-service.service';
import { RouterLink} from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  private selectedCatList :Product[];

  @Input() product : Product = {id: 0,
    name: "",
    brand : 0,
    type: 0,
    size:0,
    description : "",
    url : "",
    amount : 0,
    season : "",
    additionalInfo : "",
    discount: 0};
    constructor(private utilService: UtilsServiceService,private cartService: CartService){}
  ngOnInit() {  
    //this.selectedCatList[0] = this.product;
    console.log("product :" + this.product)
  }
  navigateTo(e: Event,param: any, url : string) : void{
    this.utilService.goToProductDetails(e,param, url);
  }
   addToCart(product:Product) : void{
    this.cartService.add(product);
    console.log("product :" + this.product)
 }
}
