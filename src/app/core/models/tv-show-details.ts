import { Episode } from "./episode";
import { TvShow } from "./tv-show";

export interface TvShowDetails extends TvShow {
  url:                  string;
  description:          string;
  description_source:   string;
  runtime:              number;
  youtube_link:         null;
  image_path:           string;
  rating:               string;
  rating_count:         string;
  countdown:            null | Episode;
  genres:               string[];
  pictures:             string[];
  episodes:             Episode[];
}
