import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartSize: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.bookingChanged.subscribe((bookings) => {
      this.cartSize = bookings.length;
    });
  }
}
