import { Injectable } from "@angular/core"

@Injectable({providedIn: 'root'})
export class LocalStorageService {

  private favoritesCities: string[] = JSON.parse(localStorage.getItem('favoritesCities')) ? JSON.parse(localStorage.getItem('favoritesCities')) : []

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
