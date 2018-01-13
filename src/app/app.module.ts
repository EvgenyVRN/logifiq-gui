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
import { SelectContractorComponent } from './select-contractor/select-contractor.component';
import { SelectAddressComponent } from './select-address/select-address.component';
import { AddressService } from './service/address.service';
import { SelectCustomsComponent } from './select-customs/select-customs.component';
import { CustomsService } from './service/customs.service';
import { SelectGenericComponent } from './select-generic/select-generic.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    ConsignmentsListComponent,
    SelectDemoComponent,
    SelectContractorComponent,
    SelectAddressComponent,
    SelectCustomsComponent,
    SelectGenericComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SelectModule
  ],
  providers: [ConsignmentService, ContractorService, AddressService, CustomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
