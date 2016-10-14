import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent {
    carParts: CarPart[];

    constructor(private racingDataService: RacingDataService) { }

    ngOnInit() {
        this.racingDataService.getCarParts()
            .subscribe(carParts => this.carParts = carParts);
    }

    totalCarParts() {
        if (Array.isArray(this.carParts)) {
            return this.carParts.reduce((prev, current) => prev += current.inStock, 0);
        } else {
            return 0;
        }
    };

    downQuantity(carPart) {
        if (carPart.quantity > 0) carPart.quantity--;
    }

    upQuantity(carPart) {
        if (carPart.quantity < carPart.inStock) carPart.quantity++;
    }
}