import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'
import { ForecastInterface } from '@widgets/weather/interfaces'
import { LocalStorageService } from 'src/app/core/services'

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
    this.initCity(this.data?.location?.name)
    return this.days[new Date(date).getDay()]
  }


  // initCity(city: string): void {
  //   this.favoritesCities = this.localStorageService.get('favoritesCities') || []
  //   this.selectedFavoriteButton = this.favoritesCities?.includes(city.toLocaleLowerCase())
  //   console.log('this.selectedFavoriteButton: ', this.selectedFavoriteButton);
  // }

  // updateFavoritesCities(event: any) {
  //   if(event) {
  //     this.favoritesCities.push(this.data?.location?.name.toLocaleLowerCase())
  //   } else {
  //     this.favoritesCities = this.favoritesCities.filter((favoriteCity: string) => favoriteCity != this.data?.location?.name.toLocaleLowerCase())
  //   }

  //   if(this.favoritesCities.length != 0) this.localStorageService.set('favoritesCities', this.favoritesCities)
  // }

  // public getDayOfWeek(date: string): string {
  //   this.initCity(this.data?.location?.name)
  //   return this.days[new Date(date).getDay()]
  // }
}
