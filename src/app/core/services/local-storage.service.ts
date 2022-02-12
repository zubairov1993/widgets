import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private favoritesCities: string[] = JSON.parse(localStorage.getItem('favoritesCities')) ? JSON.parse(localStorage.getItem('favoritesCities')) : []

  public get<T>(key: string): T {
    const data = localStorage.getItem(key);

    return (data) ? JSON.parse(data) : null;
  }

  public set(key: string, data: any): void {
    const value = JSON.stringify(data);

    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

  // FIXME: Remove
  checkFavoriteCity(city: string): boolean {
    if(this.favoritesCities?.includes(city.toLocaleLowerCase())) {
      return true
    } else {
      return false
    }
  }

  addFavoritesCities(city: string) {
    if(this.favoritesCities.length != 0) {
      this.favoritesCities.push(city.toLocaleLowerCase())
    } else {
      this.favoritesCities.push(city.toLocaleLowerCase())
    }

    localStorage.setItem('favoritesCities', JSON.stringify(this.favoritesCities))
  }

  removeFavoritesCities(city: string) {
    this.favoritesCities = this.favoritesCities.filter((favCity: string) => favCity != city.toLocaleLowerCase())
    localStorage.setItem('favoritesCities', JSON.stringify(this.favoritesCities))
  }
}
