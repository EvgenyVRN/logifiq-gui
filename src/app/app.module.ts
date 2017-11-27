import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import { FormsModule } from '@angular/forms';
import { ConsignmentService } from './consignment.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ConsignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
