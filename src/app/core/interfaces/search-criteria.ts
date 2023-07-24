import { TvShow } from "./tv-show";

export interface SearchCriteria {
  total:    string;
  page:     number;
  pages:    number;
  tv_shows: TvShow[];
}
