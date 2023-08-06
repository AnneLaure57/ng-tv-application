import { DatePipe, DecimalPipe, I18nPluralPipe } from '@angular/common';
import {Component, Input} from '@angular/core';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
  imports: [DatePipe, DecimalPipe, I18nPluralPipe],
  standalone: true
})

export default class TvShowDetailsComponent {

  @Input()
  tvShowDetails!: TvShowDetails;

  back() {
    history.back();
  }

}
