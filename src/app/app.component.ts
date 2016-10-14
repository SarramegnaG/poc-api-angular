import { Component } from '@angular/core';
import { RacingDataService } from './car-parts/racing-data.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RacingDataService]
})
export class AppComponent {
    title = 'Ultra Racing';
}