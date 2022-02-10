import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ForecastApiService {
    constructor(private readonly httpClient: HttpClient) {}

    public getAll() {
    }
}
