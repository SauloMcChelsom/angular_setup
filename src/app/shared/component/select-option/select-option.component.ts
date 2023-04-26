import {Component, Input} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent {

  @Input() options: Option[] = []
  @Input() selected: string = ""
  @Input() label: string = "Selected Item"
  @Output() newItemEvent = new EventEmitter<any>();

  private CHECK_SELECTED:string = null

  public itemControl = new FormControl(this.selected);

  public form = new FormGroup({
    item: this.itemControl,
  });

  constructor(){}

  ngOnChanges(){
    this.itemControl = new FormControl(this.selected);
  }

  ngDoCheck(){
   
    if(this.CHECK_SELECTED == this.itemControl.value){
      return
    }
    
    this.CHECK_SELECTED = this.itemControl.value
    let option = this.options.find(x=>x.name == this.itemControl.value)

    if(!option){
      return
    }
    this.addNewItem(option)
  }

  addNewItem(value) {
    this.newItemEvent.emit(value);
  }
}

export interface Option {
  id:number;
  name: string;
}