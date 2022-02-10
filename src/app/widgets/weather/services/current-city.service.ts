import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CurrentCityState } from '../states/current-city-state.service';

@Injectable({
    providedIn: 'root'
})
export class CurrentCityService {
    public get data$(): Observable<string> {
        return this.currentCityState.data$;
    }

    public get data(): string {
        return this.currentCityState.data;
    }

    private readonly defaultCity = 'kiev';

    constructor(
        private readonly currentCityState: CurrentCityState,
        private readonly localStorageService: LocalStorageService
    ) {}

    public init(): void {
        const city = this.localStorageService.get<string>('defaultCity') ?? this.defaultCity;

        this.currentCityState.set(city);
    }

    public apply(city: string): void {
        this.localStorageService.set('defaultCity', city);
        this.currentCityState.set(city);
    }
}
