import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'
import { combineLatest, map } from 'rxjs';
import { FavoriteCitiesService, CurrentCityService } from '../../../../services'

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

  public readonly favoriteButtonSelectedState$ = combineLatest([
    this.favoriteCitiesService.data$,
    this.currentCityService.data$
  ])
    .pipe(
      map(([favoriteCities, currentCity]) => favoriteCities.includes(currentCity))
    );

  constructor(
    private readonly favoriteCitiesService: FavoriteCitiesService,
    private readonly currentCityService: CurrentCityService,
  ) {}

  public ngOnChanges(): void {
    this.currentDayAsText = this.getDayOfWeekAsText();
  }

  public onFavoriteButtonSelectedChange(isSelected: boolean) {
    const city = this.data.location.name.toLocaleLowerCase();

    if(isSelected) {
      this.favoriteCitiesService.add(city)
    } else {
      this.favoriteCitiesService.remove(city)
    }
  }

  public getDayOfWeekAsText(): string {
    const localtime = this.data.location.localtime;

    return this.days[new Date(localtime).getDay()]
  }
}
