import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnChanges, OnInit {

  @Input() isVisible: boolean;
  @Output() isVisibleChange = new EventEmitter();
  @Output() orderChange = new EventEmitter();
  @Input() receivedValue: any;

  ngOnChanges(changes: SimpleChanges){
    const isVisible: SimpleChange = changes.isVisible;
    if (isVisible.currentValue === true){
      document.getElementById("myModal").style.display = "inline";
    }
  }

  constructor() { }

  ngOnInit() {
    this.receivedValue = null;
  }

  cancel():void{
    this.close();
  }

  ok(){
    this.orderChange.emit(this.receivedValue);
    this.close();
  }

  close():void{
    document.getElementById("myModal").style.display = "none";
    this.isVisible = false;
    this.isVisibleChange.emit(true);
  }

}
