import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() btnLabel: string = 'Default';
  @Input() btnClass: 'button' | 'outline' | 'text' = 'button';
  @Input() boxShadow: boolean = true;
  @Input() btnDisabled: boolean = false;
  @Input() btnIcon: boolean = false;
  @Input() btnIconName: string = 'favorite';
  @Input() btnIconPosition: 'left' | 'right' = 'right';
  @Input() btnSize: 'sm' | 'md' | 'lg' = 'sm';
  @Input() btnColor: 'default' | 'primary' | 'secondary' | 'danger' = 'default';

  @Output() btnAction = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  handleBtnAction(event: MouseEvent): void {
    this.btnAction.emit(event);
  }
}
