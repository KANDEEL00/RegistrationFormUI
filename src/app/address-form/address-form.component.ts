import { Component, EventEmitter, Output } from '@angular/core';
import { Address } from '../../shared/models/address';
import { FormsModule } from '@angular/forms';
import { Governate } from '../../shared/models/governate';
import { City } from '../../shared/models/city';

@Component({
  selector: 'address-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent {
  @Output() addAddress = new EventEmitter<Address>();
  address: Address = new Address();
  governates: Governate[] = [
    { governateID: 1, governateName: 'Giza' },
    { governateID: 2, governateName: 'Cairo' },
    { governateID: 3, governateName: 'Alexandria' },
  ];
  cities: City[] = [
    { cityID: 1, cityName: '6th of October' },
    { cityID: 2, cityName: 'Sheikh Zayed' },
    { cityID: 3, cityName: 'El Haram' },
    { cityID: 4, cityName: 'El Mohandseen' },
  ];

  onGovernateChange(governateID: number) {
    this.address.governateID = governateID;
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
