import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(time: number, ...args: unknown[]): string {
    const minutes = Math.floor(time / 60).toString();
    const seconds = Math.floor(time % 60).toString();
    return `${minutes.padStart(2, '0')}: ${seconds.padStart(2, '0')}`;
  }
}
