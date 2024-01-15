import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { brands } from './services/mock-brands.service';
import { Brand } from './brands';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor() { }
  getBrands(): Observable<Brand[]> {
    const allbrands = of(brands);   
    return allbrands;
  }  

}
