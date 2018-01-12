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


@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    ConsignmentsListComponent,
    SelectDemoComponent,
    SelectContractorComponent,
    SelectAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SelectModule
  ],
  providers: [ConsignmentService, ContractorService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
