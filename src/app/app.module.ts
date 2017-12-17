import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectModule } from 'ng2-select-compat';


import { AppComponent } from './app.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import { FormsModule } from '@angular/forms';
import { ConsignmentService } from './consignment.service';
import { AppRoutingModule } from './/app-routing.module';
import { ConsignmentsListComponent } from './consignments-list/consignments-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SelectDemoComponent } from './select-demo/select-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    ConsignmentsListComponent,
    SelectDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SelectModule
  ],
  providers: [ConsignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
