import { Component,OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../products.service';
import {NgFor} from "@angular/common";
import { ProductComponent } from './product.component';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, ProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  brandId? : number = 0;
  products: Product[] = [];
  constructor(private productService: ProductsService,private route: ActivatedRoute){}
  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) =>{
        var Qparam = params['brand'];
        if(Qparam != null) { 
          if(Qparam!="all"){
          this.brandId = parseInt(Qparam);
          this.getProductsById(this.brandId)}
          else
          {
            this.getProducts();
          }
        }
        else
        {
          this.getTrandyProducts();
        }
    })   
   
  }
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  getProductsById(id : number): void {
    this.productService.getProductByBrand(id)
        .subscribe(products => this.products = products);
  }
  getTrandyProducts(): void {
    this.productService.getTrandyProduct("trandy")
        .subscribe(products => this.products = products);
  }
}
