import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteButtonComponent {

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  public getButton(): string {
    if (this.selected) {
      return 'favorite'
    } else {
      return 'favorite_border'
    }
  }
}
