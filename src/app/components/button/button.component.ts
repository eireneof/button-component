import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnLabel: string = 'Default';
  @Input() btnClass: 'default' | 'outline' | 'text' = 'default';
  @Input() boxShadow: boolean = true;

  @Output() btnAction = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  handleBtnAction(event: MouseEvent): void { 
    this.btnAction.emit(event);
  }

}
