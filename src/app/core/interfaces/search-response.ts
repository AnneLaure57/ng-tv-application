import { TvShow } from "./tv-show";

export interface SearchResponse {
  total:    string;
  page:     number;
  pages:    number;
  tv_shows: TvShow[];
}
