import { Component, inject } from '@angular/core';
import { DynamicComponentServiceService } from '../../dynamic-component-service.service';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CartListComponent } from '../../cart-list/cart-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe, CartListComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private route: ActivatedRoute){}
  private currentNavIndex = 0;

  ngOnInit(): void {
    
    
    this.route.queryParams.subscribe((params) =>{
      var Qparam = params['brand'];
      if(Qparam != null) { 
           this.currentNavIndex =1;   
      }        
  })   
  }

  private navList = inject(DynamicComponentServiceService).getLeftNavigation();

  

  get currentComponent() {
    return this.navList[this.currentNavIndex];
  }
}
