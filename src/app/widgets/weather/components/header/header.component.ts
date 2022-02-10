import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ForecastInterface } from '@widgets/weather/interfaces/weather.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {

  @Input() data: ForecastInterface = null

  days: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  selectedFavoriteButton: boolean = false

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.initCity(this.data?.location?.name)
  }

  initCity(city: string): void {
    this.selectedFavoriteButton = this.localStorageService.checkFavoriteCity(city)
  }

  updateFavoritesCities(event: any) {
    if(event) {
      this.localStorageService.addFavoritesCities(this.data?.location?.name)
    } else {
      this.localStorageService.removeFavoritesCities(this.data?.location?.name)
    }
  }

  public getDayOfWeek(date: string): string {
    return this.days[new Date(date).getDay()]
  }
}
