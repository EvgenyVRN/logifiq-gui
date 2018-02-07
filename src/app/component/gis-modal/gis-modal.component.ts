import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-gis-modal',
  templateUrl: './gis-modal.component.html',
  styleUrls: ['./gis-modal.component.css']
})
export class GisModalComponent implements OnInit {
  selectedRows: Array<number> = [];
  ngOnInit(): void {

  }

  constructor(
    public dialogRef: MatDialogRef<GisModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setClickedRow(index, good){
    this.selectedRows.push(index);
    this.data.chosenGoods.push(good);
  }

}
