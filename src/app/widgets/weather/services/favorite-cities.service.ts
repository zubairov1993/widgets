import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { LocalStorageService } from '@core'
import { FavoriteCitiesState } from '../states'

@Injectable({
  providedIn: 'root'
})
export class FavoriteCitiesService {
  public get data$(): Observable<string[]> {
    return this.favoriteCitiesState.data$;
  }

  public get data(): string[] {
    return this.favoriteCitiesState.data;
  }

  private readonly storageKey = 'favoritesCities';

  constructor(
    private readonly favoriteCitiesState: FavoriteCitiesState,
    private readonly localStorageService: LocalStorageService
  ) {}

  public init(): void {
    const favoriteCities = this.localStorageService.get<string[]>(this.storageKey);

    this.favoriteCitiesState.set(favoriteCities);
  }

  public add(city: string): void {
    const newState = [...this.data, city];

    this.localStorageService.set(this.storageKey, newState);
    this.favoriteCitiesState.set(newState);
  }

  public remove(city: string): void {
    const newState = this.data
      .filter((currentCity) => currentCity !== city);

    this.localStorageService.set(this.storageKey, newState);
    this.favoriteCitiesState.set(newState);
  }
}
