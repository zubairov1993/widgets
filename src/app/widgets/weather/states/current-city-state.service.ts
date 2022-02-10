import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrentCityState {
    public get data$(): Observable<string> {
        return this._data$.asObservable();
    }

    public get data(): string {
        return this._data$.getValue();
    }

    private readonly _data$ = new BehaviorSubject<string>(null);

    public set(data: string): void {
        this._data$.next(data);
    }
}
