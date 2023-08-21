import { DatePipe, DecimalPipe, I18nPluralPipe, NgFor } from '@angular/common';
import {Component, Input} from '@angular/core';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
  imports: [DatePipe, DecimalPipe, I18nPluralPipe, CardComponent, NgFor],
  standalone: true
})

export default class TvShowDetailsComponent {

  @Input()
  tvShowDetails!: TvShowDetails;

  @Input()
  currentImage!: string;

  back() {
    history.back();
  }

}
