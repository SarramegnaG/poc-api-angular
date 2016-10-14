import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CarPart } from './car-part';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

    constructor(private http: Http) { }

    getCarParts() {
        return this.http.get('app/car-parts/car-parts.json')
                        .map(response => <CarPart[]>response.json().data);
    }
}
