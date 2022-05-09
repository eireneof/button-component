import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnLabel: string = 'Default';
  @Input() btnClass: 'default' | 'outline' | 'text' = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
