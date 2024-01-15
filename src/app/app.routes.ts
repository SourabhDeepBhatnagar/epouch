
import { Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './shared/products/product.component';
import { ProductsComponent } from './shared/products/products.component';
import { ProductdetailsComponent } from './shared/products/productdetails.component';
import { HomeComponent } from './home.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productdetails', component: ProductdetailsComponent}, 
  {path: 'products', component: ProductsComponent}, 
  {path: 'personaldetails', component: PersonaldetailsComponent}, 
  {path: '**', component: PagenotfoundComponent}
];
