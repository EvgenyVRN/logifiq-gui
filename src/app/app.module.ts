import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import { FormsModule } from '@angular/forms';
import { ConsignmentService } from './consignment.service';
import { AppRoutingModule } from './/app-routing.module';
import { ConsignmentsListComponent } from './consignments-list/consignments-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    ConsignmentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ConsignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
