import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor(private readonly router: Router) { }
  // For navigation to product page with brandId
  goToProductDetails(e: { preventDefault: () => void; },id: any, url: string) {
    e.preventDefault();    
    this.router.navigate([url], { queryParams:{ brand : id}});
  }
}
