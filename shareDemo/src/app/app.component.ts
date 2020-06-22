import { Component, ViewChild } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(StarRatingComponent) starRating: StarRatingComponent;
  title = 'shareDemo';
  scope = '0';

  showScope() {
    this.scope = this.starRating.vcChildScope;
  }
}
