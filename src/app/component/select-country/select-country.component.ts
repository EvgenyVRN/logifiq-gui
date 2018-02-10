import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from "../../model/country";
import {CountryService} from "../../service/country.service";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {
  public countries: Country[] = [];
  @Input() country: Country;
  @Output() countryChange = new EventEmitter();
  selectItems: SelectItem[] = [];

  constructor(
    private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
    this.getMockCountries();
    this.countries.forEach(c => this.fillSelectItems(c));
    if (this.country == null){
      this.country = new Country();
    }
  }

  private getMockCountries(){
    let c1 = new Country();
    c1.id = 10000001;
    c1.country = "Russia";
    c1.alpha2 = "RU";
    let c2 = new Country();
    c2.id = 10000002;
    c2.country = "Germany";
    c2.alpha2 = "GR";
    this.countries.push(c1, c2);
  }

  getCountries():void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  private fillSelectItems(country: Country){
    this.selectItems.push({label: country.country, value: country});
  }

  public onCountryChange(value:any){
    this.countryChange.emit(this.country);
  }
}
