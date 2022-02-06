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
  mainHour: number = 0

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    setTimeout(() => {
      const storage = JSON.parse(localStorage.getItem('default') as string)
      const currentDate = new Date(new Date().setHours(0,0,0,0))
      const storageDate = new Date(new Date(storage?.location?.localtime).setHours(0,0,0,0))

      if(storage && storageDate >= currentDate) {
        this.forecastResult = storage
        console.log('this.forecastResult: ', this.forecastResult);
        if(this.forecastResult) this.mainHour = new Date(this.forecastResult?.location?.localtime).getHours()
      } else {
        this.selectOption('kiev', 'onInit')
      }
    });
  }

  searchFn(event: any) {
    const searchCity = this.weatherService.searchCity(event.target.value).pipe(distinctUntilChanged()).subscribe((response: any) => {
      if(response) this.searchOptions = response
      console.log('this.searchOptions: ', this.searchOptions);
    })
    this.allSubsscription.push(searchCity)
  }

  selectOption(name: string, place: string) {
    const getForecast = this.weatherService.getForecast(name.toLocaleLowerCase()).subscribe((response: any) => {
      if(response) this.forecastResult = response
      if(place == 'onInit') localStorage.setItem('default', JSON.stringify(response))
      console.log('this.forecastResult: ', this.forecastResult);
      if(this.forecastResult) this.mainHour = new Date(this.forecastResult?.location?.localtime).getHours()
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
