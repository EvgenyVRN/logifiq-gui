import { ConsignmentComponent } from './consignment/consignment.component';
import { ConsignmentsListComponent } from './consignments-list/consignments-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'consignment', component: ConsignmentComponent },
  { path: 'consignments', component: ConsignmentsListComponent }
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
