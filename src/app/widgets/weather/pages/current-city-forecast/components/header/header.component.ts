import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { FavoriteCitiesService, CurrentCityService } from '../../../../services'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
  @Input() public data!: ForecastInterface;

  public readonly days: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  public readonly favoriteButtonSelectedState$ = new BehaviorSubject<boolean>(false)
  // public readonly favoriteButtonSelectedState$ = combineLatest([
  //   this.favoriteCitiesService.data$,
  //   this.currentCityService.data$
  // ])
  //   .pipe(
  //     map(([favoriteCities, currentCity]) => favoriteCities.includes(currentCity))
  //   );

  constructor(
    private readonly favoriteCitiesService: FavoriteCitiesService,
    private readonly currentCityService: CurrentCityService,
  ) {}

  public onFavoriteButtonSelectedChange(isSelected: boolean) {
    const city = this.data.location.name.toLocaleLowerCase();

    if(isSelected) {
      this.favoriteCitiesService.add(city)
    } else {
      this.favoriteCitiesService.remove(city)
    }
  }

  public getDayOfWeek(date: string): string {
    return this.days[new Date(date).getDay()]
  }
}
