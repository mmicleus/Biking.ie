import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from '../shared/network.service';
import { UtilityService } from '../shared/utility.service';

@Component({
  selector: 'app-bike-rental',
  templateUrl: './bike-rental.component.html',
  styleUrls: ['./bike-rental.component.css'],
})
export class BikeRentalComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private networkService: NetworkService,
    public utilityService: UtilityService
  ) {}

  bikes?: {
    type: string;
    price: number;
    model: string;
    src: string;
    infoPage: string;
  }[];

  town: string = '';

  ngOnInit() {
    this.town = this.activatedRoute.snapshot.data['town'];

    this.networkService.fetchData().subscribe((data) => {
      this.bikes = data[this.town].bikes;
    });
  }
}
