import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PopularCitiesState } from '../states';
import { POPULAR_CITIES } from '../data';

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
    this.popularCitiesState.set([...POPULAR_CITIES])
  }
}
