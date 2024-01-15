import { Injectable, Type } from '@angular/core';
import { LeftnavHomeComponent } from './shared/leftnav/leftnavHome.component';
import { LeftnavPagesComponent } from './shared/leftnav/leftnavPages.component';

@Injectable({
  providedIn: 'root'
})

export class DynamicComponentServiceService {

  getLeftNavigation() {
    return [
      {
        component: LeftnavHomeComponent,
        inputs: { heading: 'Home', title: 'Home' },
      },
      {
        component: LeftnavPagesComponent,
        inputs: { heading: 'Product Detail', title: 'Home' },
      },      
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}