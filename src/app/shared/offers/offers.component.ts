import { Component } from '@angular/core';
import {NgFor} from "@angular/common";
import { Offer } from '../../offers';
import { OfferService } from '../../offers.service';
import { OfferComponent } from './offer.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgFor,OfferComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  selectedProduct?: Offer;

  offers: Offer[] = [];

  constructor(private offerService: OfferService ){}
  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getOffers()
        .subscribe(offers => this.offers = offers);
  }  

}
