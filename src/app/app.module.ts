import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectModule } from 'ng2-select-compat';


import { AppComponent } from './app.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConsignmentService } from './service/consignment.service';
import { ContractorService } from './service/contractor.service';
import { AppRoutingModule } from './/app-routing.module';
import { ConsignmentsListComponent } from './consignments-list/consignments-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SelectDemoComponent } from './select-demo/select-demo.component';
import { SelectContractorComponent } from './component/select-contractor/select-contractor.component';
import { SelectAddressComponent } from './component/select-address/select-address.component';
import { AddressService } from './service/address.service';
import { SelectCustomsComponent } from './component/select-customs/select-customs.component';
import { CustomsService } from './service/customs.service';
import { SelectGenericComponent } from './component/select-generic/select-generic.component';
import { SelectDeliveryTermsComponent } from './component/select-delivery-terms/select-delivery-terms.component';
import { SelectReleaseTermsComponent } from './component/select-release-terms/select-release-terms.component';
import { SelectTransportModeComponent } from './component/select-transport-mode/select-transport-mode.component';
import { SelectGoodComponent } from './component/select-good/select-good.component';
import { SelectUnitComponent } from './component/select-unit/select-unit.component';
import { GoodService } from './service/good.service';
import { UnitService } from './service/unit.service';
import { SelectConsDirectionComponent } from './component/select-cons-direction/select-cons-direction.component';
import { SelectContractComponent } from './component/select-contract/select-contract.component';
import {ContractService} from "./service/contract.service";
import { SelectCountryComponent } from './component/select-country/select-country.component';
import { ConsignmentFilterPipe } from './pipe/consignment-filter.pipe';
import {OrderService} from "./service/order.service";
import {GoodInStockService} from "./service/good-in-stock.service";
import {Globals} from "./model/globals";
import {CountryService} from "./service/country.service";
import {MatAutocompleteModule, MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OrderModalComponent } from './component/order-modal/order-modal.component';
import { GisModalComponent } from './component/gis-modal/gis-modal.component';
import {DropdownModule, InputTextModule} from "primeng/primeng";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    ConsignmentsListComponent,
    SelectDemoComponent,
    SelectContractorComponent,
    SelectAddressComponent,
    SelectCustomsComponent,
    SelectGenericComponent,
    SelectDeliveryTermsComponent,
    SelectReleaseTermsComponent,
    SelectTransportModeComponent,
    SelectGoodComponent,
    SelectUnitComponent,
    SelectConsDirectionComponent,
    SelectContractComponent,
    SelectCountryComponent,
    ConsignmentFilterPipe,
    OrderModalComponent,
    GisModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SelectModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    InputTextModule,
    CommonModule,
    DropdownModule

  ],
  providers: [ConsignmentService, ContractorService, AddressService, CustomsService, GoodService, UnitService, ContractService,
  OrderService, GoodInStockService, Globals, CountryService],
  bootstrap: [AppComponent],
  entryComponents: [OrderModalComponent, GisModalComponent]
})
export class AppModule { }
