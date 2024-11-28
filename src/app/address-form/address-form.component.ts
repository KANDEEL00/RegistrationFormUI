import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Address } from '../../shared/models/address';
import { FormsModule } from '@angular/forms';
import { Governate } from '../../shared/models/governate';
import { City } from '../../shared/models/city';
import { GovernateService } from '../services/governate.service';
import { CityService } from '../services/city.service';

@Component({
  selector: 'address-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent implements OnInit {
  @Output() addAddress = new EventEmitter<Address>();
  address: Address = new Address();
  governates: Governate[] = [];
  cities: City[] = [];

  constructor(
    public governateService: GovernateService,
    public cityService: CityService
  ) {}

  ngOnInit(): void {
    this.governateService.getGovernates().subscribe((data) => {
      this.governates = data;
    });
  }

  onGovernateChange(governateID: number) {
    this.address.governateID = governateID;
    this.cityService.getCities(governateID).subscribe((data) => {
      this.cities = data;
    });
  }
  onCityChange(cityID: number) {
    this.address.cityID = cityID;
  }
  onAddAddress() {
    console.log(this.address);
    this.addAddress.emit(this.address);
    this.address = new Address();
  }
}
