import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentCityForecastState {
    public get data$(): Observable<any[]> {
        return this._data$.asObservable();
    }

    public get data(): any[] {
        return this._data$.getValue();
    }

    private readonly _data$ = new BehaviorSubject<any[]>([]);

    public set(data: any[]): void {
        this._data$.next(data);
    }
}
