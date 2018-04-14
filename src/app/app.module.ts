import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConsignmentService } from './service/consignment.service';
import { ContractorService } from './service/contractor.service';
import { AppRoutingModule } from './/app-routing.module';
import { ConsignmentsListComponent } from './consignments-list/consignments-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import {CountryService} from "./service/country.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OrderModalComponent } from './component/order-modal/order-modal.component';
import { GisModalComponent } from './component/gis-modal/gis-modal.component';
import {CalendarModule, CheckboxModule, DropdownModule, InputTextModule, SplitButtonModule} from "primeng/primeng";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material";
import { TirCarnetComponent } from './component/tir-carnet/tir-carnet/tir-carnet.component';
import { TirCarnetListComponent } from './component/tir-carnet-list/tir-carnet-list/tir-carnet-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    ConsignmentsListComponent,
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
    GisModalComponent,
    TirCarnetComponent,
    TirCarnetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    SplitButtonModule
  ],
  providers: [ConsignmentService, ContractorService, AddressService, CustomsService, GoodService, UnitService, ContractService,
  OrderService, GoodInStockService, CountryService],
  bootstrap: [AppComponent],
  entryComponents: [OrderModalComponent, GisModalComponent]
})
export class AppModule { }
