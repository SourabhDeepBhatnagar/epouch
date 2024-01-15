import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { LeftnavHomeComponent } from './shared/leftnav/leftnavHome.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { OffersComponent } from './shared/offers/offers.component';
import { ProductsComponent } from './shared/products/products.component';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,LeftnavHomeComponent,FeatureComponent,OffersComponent,ProductsComponent,FooterComponent],
  templateUrl: './home.component.html',
  
})
export class HomeComponent {

}
