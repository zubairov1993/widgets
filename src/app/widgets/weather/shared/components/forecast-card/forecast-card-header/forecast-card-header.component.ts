import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'

@Component({
  selector: 'forecast-card-header',
  templateUrl: './forecast-card-header.component.html',
  styleUrls: ['./forecast-card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ForecastCardHeaderComponent implements OnChanges {
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
