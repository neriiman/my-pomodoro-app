import { Component, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input.required<string>();
  hierarchy = input<'primary' | 'secondary'>('secondary');
  iconName = input<string>('');
  shadowed = input<boolean>(false);
  pressed = output<MouseEvent>();

  handleClick(event:MouseEvent) {
    this.pressed.emit(event);
  }
}
