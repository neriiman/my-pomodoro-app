import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  classList = input<string>();
  hasIcon = input<boolean>(false);
  label = input.required<string>();
  hierarchy = input<'primary' | 'secondary'>('secondary');
  iconName = input<string>('');
  shadowed = input<boolean>(false)
}
