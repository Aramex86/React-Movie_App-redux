export type MovieListType = {
  poster_path: string;
  popularity: number;
  vote_count: number;
  video: false;
  media_type: string;
  id: number;
  adult: false;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
};

export type CreditsType = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
};

type ParamsType = {
  id: number
};

type MatchType = {
  isExact: boolean;
  params: ParamsType;
  path: string;
  url: string;
};

export type WithMoviePropsType = {
  movieList: Array<MovieListType>
  isFetching: boolean
  match: MatchType
  movieId:number
  credits:Array<CreditsType>
  requestMovieList: () => void;
  requestCredits: (movieId: number) => void
};
