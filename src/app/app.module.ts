import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectModule } from 'ng2-select-compat';


import { AppComponent } from './app.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import { FormsModule } from '@angular/forms';
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
import { ChooseOrderComponent } from './component/choose-order/choose-order.component';
import { ModalWindowComponent } from './component/modal-window/modal-window.component';



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
    ChooseOrderComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SelectModule
  ],
  providers: [ConsignmentService, ContractorService, AddressService, CustomsService, GoodService, UnitService, ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
