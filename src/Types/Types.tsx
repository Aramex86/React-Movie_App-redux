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
  genres:Array<GenresType>
  details: MovieDetailsType|null
  requestMovieList: () => void;
  requestCredits: (movieId: number) => void
  requestGenres:()=>void
  requestDetails:(movieId:number)=>void
};

// 
export type GenresType={
  id:number
  name:string
}


type MovieDetailsCollectionType={
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}
type MovieDetailsCompaniesType={
    id: number,
    logo_path: string
    name:string
    origin_country: string
}
type MovieDetailsCountriesType={
      iso_3166_1:string,
      name:string
}
type MovieDetailsLanguagesType={
  iso_639_1: string,
  name: string
}




export type MovieDetailsType={
  adult:boolean ,
  backdrop_path:string
  belongs_to_collection: MovieDetailsCollectionType
  budget: number,
  genres: Array<GenresType>,
  homepage: string
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string
  overview: string
  popularity: number,
  poster_path: string
  production_companies: Array<MovieDetailsCompaniesType>
  production_countries: Array<MovieDetailsCountriesType>,
  release_date: string
  revenue: number
  runtime: number
  spoken_languages:Array<MovieDetailsLanguagesType>
  status: string,
  tagline: string
  title: string
  video: string
  vote_average: number
  vote_count: number
  requestDetails:(movieId:number)=>void
}
