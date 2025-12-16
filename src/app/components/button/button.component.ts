import { Component, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input<string>();
  hierarchy = input<'primary' | 'secondary' | 'tertiary'>('secondary');
  iconName = input<string>('');
  shadowed = input<boolean>(false);
  pressed = output<MouseEvent>();

  handleClick(event: MouseEvent) {
    this.pressed.emit(event);
  }
}
