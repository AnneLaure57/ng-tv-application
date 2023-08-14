import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, subDays } from 'date-fns';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';

@Pipe({
  name: 'countdown',
  standalone: true
})
export class CountdownPipe implements PipeTransform {

  transform(tvShowDetails : TvShowDetails): String  {
    if (tvShowDetails.countdown?.air_date){
      return formatDistance(new Date(tvShowDetails.countdown.air_date), new Date(), {addSuffix: true});
    } else if (tvShowDetails.status == "Canceled/Ended" || tvShowDetails.status == "Ended") {
      return "Show has ended";
    } else {
      return  tvShowDetails.status + " but no next episode date";
    }
  }
}
