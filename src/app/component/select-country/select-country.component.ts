import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from "../../model/country";
import {CountryService} from "../../service/country.service";

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {
  public countries: Country[];
  @Input() country: Country;
  @Output() countryChange = new EventEmitter();
  public active: Country[] = [];
  private value:any = {};
  public disabled = false;

  constructor(
    private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
    if (this.country != null){
      this.country.text = this.country.country;
      this.active.push(this.country);
    }

  }

  getCountries():void {
    this.countryService.getCountries()
      .subscribe(countries => this.countriesAnswer(countries));
  }

  private countriesAnswer(countries: Country[]) {
    this.countries = countries;
    this.countries.forEach((country: Country) => {
      country.text = country.country;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.countryChange.emit(value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
