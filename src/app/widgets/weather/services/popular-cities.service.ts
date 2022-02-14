import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PopularCitiesState } from '../states/popular-cities-state.service';
import { popularCities } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class PopularCitiesService {
  public get data$(): Observable<string[]> {
    return this.popularCitiesState.data$
  }

  public get data(): string[] {
    return this.popularCitiesState.data
  }

  constructor(
    private readonly popularCitiesState: PopularCitiesState
  ) {}

  public init(): void {
    this.popularCitiesState.set(popularCities)
  }
}
