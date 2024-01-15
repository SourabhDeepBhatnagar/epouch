import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Product } from '../../product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  
})
export class ProductdetailsComponent {
  myProduct : Product = {id: 0,
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

  constructor(private route: ActivatedRoute,private productService: ProductsService,private cartService: CartService ){ }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) =>{
        var Qparam = params['brand'];
        if(Qparam != null) { 
          if(Qparam!="all"){
          var brandId = parseInt(Qparam);
          this.getProductsById(brandId)}          
        }        
    })   
   
  } 
  getProductsById(id : number): void {
    this.productService.getProductById(id)
        .subscribe(products => this.myProduct = products);
  }
}


