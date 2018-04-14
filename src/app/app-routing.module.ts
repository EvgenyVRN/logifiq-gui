import { ConsignmentComponent } from './consignment/consignment.component';
import { ConsignmentsListComponent } from './consignments-list/consignments-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {TirCarnetComponent} from "./component/tir-carnet/tir-carnet/tir-carnet.component";
import {TirCarnetListComponent} from "./component/tir-carnet-list/tir-carnet-list/tir-carnet-list.component";

const routes: Routes = [
  { path: 'consignment', component: ConsignmentComponent },
  { path: 'consignment/:id', component: ConsignmentComponent },
  { path: 'consignments', component: ConsignmentsListComponent },
  { path: 'tir', component: TirCarnetComponent },
  { path: 'tirs', component: TirCarnetListComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
