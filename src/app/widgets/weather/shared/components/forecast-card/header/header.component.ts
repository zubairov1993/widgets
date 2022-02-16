import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnChanges {
  @Input() public data!: ForecastInterface;

  public currentDayAsText: string;
  public readonly days: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  public ngOnChanges(): void {
    this.currentDayAsText = this.getDayOfWeekAsText();
  }

  public getDayOfWeekAsText(): string {
    const localtime = this.data.location.localtime;

    return this.days[new Date(localtime).getDay()]
  }
}
