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

type CastType = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};
type CrewType = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
};

export type CreditsType = {
  cast: Array<CastType>;
  crew: Array<CrewType>;
};

type ParamsType = {
  id: number;
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
  movieId: number
  credits: CreditsType | null
  genres: Array<GenresType>
  details: MovieDetailsType | null
  reviews: Array<ResultsType>
  videos: Array<VideoType>
  recomand:Array<RecomandType>
  keywords:Array<KeywordsType>
  requestMovieList: () => void
  requestCredits: (movieId: number) => void
  requestGenres: () => void
  requestDetails: (movieId: number) => void
  requestReviews: (movieId: number) => void
  requestVideos:(movieId:number)=> void
  requestRecomand:(movieId:number)=> void
  requestKeywords:(movieId:number)=> void
};

//
export type GenresType = {
  id: number;
  name: string;
};

type MovieDetailsCollectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
type MovieDetailsCompaniesType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type MovieDetailsCountriesType = {
  iso_3166_1: string;
  name: string;
};
type MovieDetailsLanguagesType = {
  iso_639_1: string;
  name: string;
};

export type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: MovieDetailsCollectionType;
  budget: number;
  genres: Array<GenresType>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<MovieDetailsCompaniesType>;
  production_countries: Array<MovieDetailsCountriesType>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<MovieDetailsLanguagesType>;
  status: string;
  tagline: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
  //requestDetails: (movieId: number) => void;
};

// REVIEWS

export type ResultsType = {
  author: string;
  content: string;
  id: string;
  url: string;
};

export type ReviewsType = {
  id: number;
  page: number;
  resutlts: Array<ResultsType>;
};

//VIDEOS

export type VideoType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: null;
  type: string;
};

//Recomand
export type RecomandType={
  id: number
  video: number
  vote_count: number
  vote_average: number
  title: string
  release_date: string
  original_language: string
  original_title: string
  genre_ids: Array<GenresType>
  backdrop_path: string
  adult: boolean
  overview: string
  poster_path: string
  popularity: number
}
  
 //Keywords

  
  
  export type KeywordsType={
    id:number
    name:string
    
  } 
  
  