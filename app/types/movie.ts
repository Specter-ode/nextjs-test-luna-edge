export interface IRating {
  Source: string;
  Value: string;
}
export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}
export interface IMovieDetails {
  Title: string;
  Released: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Genre: string;
  Year: string;
  Response: string;
}

export interface IResponseByQuery {
  Search: IMovie[];
  TotalResults: Number;
  Response: boolean;
  Error?: string;
}
