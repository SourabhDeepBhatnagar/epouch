import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LeftnavHomeComponent } from './shared/leftnav/leftnavHome.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { OffersComponent } from './shared/offers/offers.component';
import { ProductsComponent } from './shared/products/products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet ,HeaderComponent, LeftnavHomeComponent,FeatureComponent, 
            OffersComponent,ProductsComponent, FooterComponent,HomeComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Find your style!!!';  

}
