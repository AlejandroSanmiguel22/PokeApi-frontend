import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() currentId: number = 1;
  @Output() navigate = new EventEmitter<number>();

  goToPrevious() {
    if (this.currentId > 1) {
      this.navigate.emit(this.currentId - 1);
    }
  }

  goToNext() {
    this.navigate.emit(this.currentId + 1);
  }
}
