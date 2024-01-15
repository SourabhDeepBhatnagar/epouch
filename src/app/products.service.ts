import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, find, map, tap } from 'rxjs/operators';
import { Product } from './product';
import { Products } from './services/mock-products.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    const products = of(Products);
    this.messageService.add('ProductService: fetched data');
    return products;
  }
  getTrandyProduct(trandy: string ): Observable<Product[]> {
    
    return <Observable<Product[]>> (this.getProducts().pipe(map(x=> x.filter(y=> y.additionalInfo === trandy))));

  } 
  getProductByBrand(brandid: number ): Observable<Product[]> {
    
    return <Observable<Product[]>> (this.getProducts().pipe(map(x=> x.filter(y=> y.brand === brandid))));

  } 
  getProductById(id: number ): Observable<Product> {
    
    return <Observable<Product>> (this.getProducts().pipe(map(x=> x.find(y=> y.id === id))));

  } 

}
