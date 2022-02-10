import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ForecastInterface } from '../interfaces/weather.interface';

@Injectable({
    providedIn: 'root'
})
export class CurrentCityForecastState {
    public get data$(): Observable<ForecastInterface> {
        return this._data$.asObservable();
    }

    public get data(): ForecastInterface {
        return this._data$.getValue();
    }

    private readonly _data$ = new BehaviorSubject<ForecastInterface>(null);

    public set(data: ForecastInterface): void {
        this._data$.next(data);
    }
}
