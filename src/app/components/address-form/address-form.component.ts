import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Address } from '../../../shared/models/address';
import { Governate } from '../../../shared/models/governate';
import { City } from '../../../shared/models/city';
import { GovernateService } from '../../services/governate.service';
import { CityService } from '../../services/city.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent implements OnInit {
  @Output() addAddress = new EventEmitter<Address>();

  addressForm = new FormGroup({
    governateID: new FormControl('', [Validators.required]),
    cityID: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    buildingNumber: new FormControl('', [Validators.required]),
    flatNumber: new FormControl('', [Validators.required]),
  });

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

    this.addressForm.controls['governateID'].valueChanges.subscribe((govID) => {
      this.cityService.getCities(Number(govID)).subscribe((data) => {
        this.cities = data;
      });
    });
  }

  onAddAddress() {
    console.log(this.addressForm.value);
    if (this.addressForm.invalid) {
      console.log('Invalid Address');
      if (this.addressForm.controls['governateID'].invalid) {
        console.log('Governate is required');
      }
      if (this.addressForm.controls['cityID'].invalid) {
        console.log('City is required');
      }
      if (this.addressForm.controls['street'].invalid) {
        console.log('Street is required');
      }
      if (this.addressForm.controls['buildingNumber'].invalid) {
        console.log('Building Number is required');
      }
      if (this.addressForm.controls['flatNumber'].invalid) {
        console.log('Flat Number is required');
      }
    } else {
      console.log('Valid Address');

      let address = new Address();

      address.governateID = Number(
        this.addressForm.controls['governateID'].value!
      );
      address.cityID = Number(this.addressForm.controls['cityID'].value!);
      address.street = this.addressForm.controls['street'].value!;
      address.buildingNumber =
        this.addressForm.controls['buildingNumber'].value!;
      address.flatNumber = Number(
        this.addressForm.controls['flatNumber'].value!
      );
      console.log(address);
      this.addAddress.emit(address);
      this.addressForm.reset();
    }
  }
}
