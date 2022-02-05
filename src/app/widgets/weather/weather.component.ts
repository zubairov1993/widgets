import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '@widgets/services/weather.service';
import { distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {


  searchOptions: any[] = []
  forecastResult: any = null
  allSubsscription: Subscription[] = []
  days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if(localStorage.getItem('default')) {
      this.forecastResult = JSON.parse(localStorage.getItem('default') as string)
    } else {
      const getForecast = this.weatherService.getForecast('kiev').subscribe((response: any) => {
        localStorage.setItem('default', JSON.stringify(response))
        this.forecastResult = response
      })

      this.allSubsscription.push(getForecast)
    }
  }

  searchFn(event: any) {
    const searchCity = this.weatherService.searchCity(event.target.value).pipe(distinctUntilChanged()).subscribe((response: any) => {
      if(response) this.searchOptions = response
      console.log('this.searchOptions: ', this.searchOptions);
    })
    this.allSubsscription.push(searchCity)
  }

  selectOption(name: string) {
    const getForecast = this.weatherService.getForecast(name.toLocaleLowerCase()).subscribe((response: any) => {
      if(response) this.forecastResult = response
      console.log('this.forecastResult: ', this.forecastResult);
    })
    this.allSubsscription.push(getForecast)
  }

  getDayOfWeek(date: string) {
    return this.days[new Date(date).getDay()]
  }

  ngOnDestroy(): void {
    this.allSubsscription.forEach((sub: Subscription) => {
      if(sub) sub.unsubscribe()
    })
  }

}
