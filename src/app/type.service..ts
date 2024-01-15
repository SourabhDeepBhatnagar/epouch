import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { types } from './services/mock-types.service';
import { Types } from './types';
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }
  getTypes(): Observable<Types[]> {
    const alltypes = of(types);   
    return alltypes;
  }  

}
