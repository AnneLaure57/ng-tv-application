import { DatePipe, DecimalPipe } from '@angular/common';
import {Component, Input} from '@angular/core';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
  imports: [DatePipe, DecimalPipe],
  standalone: true
})

export class TvShowDetailsComponent {

  @Input()
  showDetails!: TvShowDetails;

  constructor() {
    console.log(this.showDetails);
  }

  back() {
    history.back();
  }

}
