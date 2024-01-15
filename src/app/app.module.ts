import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LeftnavHomeComponent } from './shared/leftnav/leftnavHome.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [    
    
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    RouterModule,
    AppRoutingModule,
    LeftnavHomeComponent,
    HttpClientModule,  
    CommonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: []
})
export class AppModule { }
