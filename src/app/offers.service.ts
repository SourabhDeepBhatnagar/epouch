import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { allOffers } from './services/mock-latestoffers.service';
import { Offer } from './offers';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }
  getOffers(): Observable<Offer[]> {
    const offers = of(allOffers);   
    return offers;
  }  

}
