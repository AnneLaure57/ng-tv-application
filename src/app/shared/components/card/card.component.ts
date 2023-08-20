import { TvShowDetails } from './../../../core/models/tv-show-details';
import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  tvShowDetails!: TvShowDetails;

}
