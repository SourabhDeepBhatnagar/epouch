import { Component, Input } from '@angular/core';
import { BrandService } from '../../brands.service';
import { NgFor,NgForOf } from "@angular/common";
import { Brand } from '../../brands';
import { Types } from '../../types';
import { TypeService } from '../../type.service.';
import { UtilsServiceService } from '../../utils-service.service';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../login/login.component';


@Component({
  selector: 'app-leftnavPages',
  standalone: true,
  imports: [NgFor,NgForOf, RouterLink,RouterLinkActive,RouterOutlet,LoginComponent],
  templateUrl: './leftnavPages.component.html'
})
export class LeftnavPagesComponent {
  
  brands: Brand[] = [];
  types:  Types[] = [];
  @Input() heading!: string;
  @Input() title!: string;
  
  constructor(private brandService: BrandService, private typeService : TypeService, private utilService : UtilsServiceService ){}
  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
    console.log(this.types);
  }
  getTypes(): void {
    this.typeService.getTypes()
        .subscribe(types => this.types = types);
  }
  getBrands(): void {
    this.brandService.getBrands()
        .subscribe(brands => this.brands = brands);
  }
  navigateTo(e: Event,param: any, url : string) : void{
    this.utilService.goToProductDetails(e,param, url);
  }
}
