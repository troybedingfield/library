import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'troy-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: 'default' | 'success' | 'warning' | 'error' | 'disabled' | undefined = 'default';
  @Input() disabled: boolean | undefined = false;
  @Input() fill: 'solid' | 'outline' | 'clear' | undefined = 'solid';
  @Input() size: 'small' | 'medium' | 'large' | undefined = 'medium';
  @Input() upperCase: boolean | undefined = false;
  @Input() maxWidth: number | undefined;
  @Input() minWidth: number | undefined;
  @Input() customBGColor: string | undefined;
  @Input() customColor: string | undefined;
  @Input() customBorderColor: string | undefined;

  @Output()
  onClick = new EventEmitter<Event>();

  constructor() { }

}
