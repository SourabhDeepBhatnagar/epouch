import { Component, Input } from '@angular/core';
import { Offer } from '../../offers';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
})
export class OfferComponent {
  @Input() offer : Offer = {id: 0,
    text: "",
    season: "",
    description : "",
    offerImageUrl : "",
    additionalInfo : "",
    discount: ""};
  ngOnInit() {  
  }
}
