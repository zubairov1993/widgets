import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'
import { LocalStorageService } from 'src/app/core/services'

@Component({
  selector: 'app-header-favorite',
  templateUrl: './header-favorite.component.html',
  styleUrls: ['./header-favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderFavoriteComponent implements OnInit {

  @Input() data: ForecastInterface = null

  days: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  selectedFavoriteButton: boolean = false

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
  }

  public getDayOfWeek(date: string): string {
    return this.days[new Date(date).getDay()]
  }
}
