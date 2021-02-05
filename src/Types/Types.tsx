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

type Roletype = {
  character: string;
  credit_id: string;
  episode_count: number;
};
export type CastType = {
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
  roles: Array<Roletype>;
};
export type CrewType = {
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
  total_episode_count: number;
};

export type CreditsType = {
  id: number;
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
  movieList: Array<MovieListType>;
  isFetching: boolean;
  match: MatchType;
  movieId: number;
  credits: CreditsType | null;
  genres: Array<GenresType>;
  details: MovieDetailsType | null;
  reviews: Array<ResultsType>;
  videos: Array<VideoType>;
  recomand: Array<RecomandType>;
  keywords: Array<KeywordsType>;
  vote_average: number;
  errors: string;
  requestMovieList: () => void;
  requestCredits: (movieId: number) => void;
  requestGenres: () => void;
  requestDetails: (movieId: number) => void;
  requestTvDetails: (TvId: number) => void;
  requestReviews: (movieId: number) => void;
  requestVideos: (movieId: number) => void;
  requestRecomand: (movieId: number) => void;
  requestKeywords: (movieId: number) => void;
  handaleplay: () => void;
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
};
//TV

type CreatedBytype = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

type TvGenresType = {
  id: number;
  name: string;
};

type LastEpisodType = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
};
type NetworksType = {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
};

type SeasonsType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

type LanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TvDetailType = {
  backdrop_path: string;
  created_by: Array<CreatedBytype>;
  episode_run_time: Array<number>;
  first_air_date: string;
  genres: Array<TvGenresType>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: LastEpisodType;
  name: string;
  next_episode_to_air: null;
  networks: Array<NetworksType>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<MovieDetailsCompaniesType>;
  production_countries: Array<MovieDetailsCompaniesType>;
  seasons: Array<SeasonsType>;
  spoken_languages: Array<LanguageType>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type TvPropsType = {
  movieList: Array<MovieListType>;
  isFetching: boolean;
  TvId: number;
  credits: CreditsType | null;
  genres: Array<GenresType>;
  details: TvDetailType | null;
  match: MatchType;
  reviews: Array<ResultsType>;
  videos: Array<VideoType>;
  recomand: Array<RecomandType>;
  keywords: Array<KeywordsType>;
  external: ExternalIdsType | null;
  vote_average: number;
  errors: string;
  requestCredits: (tvId: number) => void;
  requestGenres: () => void;
  requestTvDetails: (tvId: number) => void;
  requestTvReviews: (tvId: number) => void;
  requestVideos: (tvId: number) => void;
  requestRecomand: (tvId: number) => void;
  requestKeywords: (tvId: number) => void;
  requestExternal: (tvId: number) => void;
};

// REVIEWS

export type ResultsType = {
  author: string;
  content: string;
  id: string;
  url: string;
};

type AuthorDetailsType = {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
};

export type ReviewsType = {
  page: number;
  author: string;
  author_details: AuthorDetailsType;
  content: string;
  id: string;
  url: string;
  // resutlts: Array<ResultsType>;
};

//VIDEOS

export type VideoType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string | null;
  name: string;
  site: string;
  size: null;
  type: string;
};

//Recomand
export type RecomandType = {
  id: number;
  video: number;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<GenresType>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  name: string;
  first_air_date: string;
};

//Keywords
export type KeywordsType = {
  id: number;
  name: string;
};

//People Types

type NamesType = {
  names: string;
};

export type DetailType = {
  adult: boolean;
  also_known_as: Array<NamesType>;
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type CombinedCreditsCastType = {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  character: string;
  credit_id: string;
  order: number;
  media_type: string;
  name: string;
  first_air_date: string;
};

export type CombineCreditsCrewType = {
  adult: boolean;
  backdrop_path: string;
  credit_id: string;
  department: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  job: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  character: string;
  order: number;
};

export type AllMediaType = {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  character: string;
  name: string;
  credit_id: string;
  department: string;
  first_air_date: string;
  job: string;
  media_type: string;
  order: number;
  episode_count: number;
};

export type ExternalIdsType = {
  id: number;
  freebase_mid: null;
  freebase_id: null;
  imdb_id: string;
  tvrage_id: null;
  facebook_id: null;
  instagram_id: string;
  twitter_id: string;
};

//Home page
export type PopularType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
  name: string;
  first_air_date: string;
};
// NOw Playing
export type NowPlayngType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean | string;
  vote_average: number;
  vote_count: number;
  name: string;
  first_air_date: string;
};

export type TVPopularType = {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  title: string;
};

//Traidings

export type TraidingsType = {
  vote_average: number;
  overview: string;
  release_date: number;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  title: string;
  video: boolean;
  popularity: number;
  media_type: string;
  name: string;
  first_air_date: string;
};

//Upcoming

export type UpComingType = {
  vote_average: number;
  overview: string;
  release_date: number;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  title: string;
  video: boolean;
  popularity: number;
  media_type: string;
  name: string;
  first_air_date: string;
};

//Search
export type SearchType = {
  vote_average: number;
  overview: string;
  release_date: number;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  title: string;
  video: boolean;
  popularity: number;
  media_type: string;
  name: string;
  first_air_date: string;
  profile_path: string;
  known_for_department: string;
};

export type SearchObjectType = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<SearchType>;
};

//Collections
export type CollectionType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
};

export type CollectionObjectType = {
  results: Array<CollectionType>;
  total_pages: number;
  total_results: number;
  page: number;
};

//Movie Page Type

export type PopularObjectType = {
  results: Array<PopularType>;
  total_pages: number;
  total_results: number;
  page: number;
};

export type NowPlayingObjectType = {
  results: Array<NowPlayngType>;
  total_pages: number;
  total_results: number;
  page: number;
};

export type UpComingObjectType = {
  results: Array<UpComingType>;
  total_pages: number;
  total_results: number;
  page: number;
};
export type TopRatedObjectType = {
  results: Array<AllMediaType>;
  total_pages: number;
  total_results: number;
  page: number;
};

//TV
export type PopularTvObjectType = {
  results: Array<TVPopularType>;
  total_pages: number;
  total_results: number;
  page: number;
};

//People

type PopularPeopleType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: Array<AllMediaType>;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
};

export type PopularPeopleObjectType = {
  results: Array<PopularPeopleType>;
  total_pages: number;
  total_results: number;
  page: number;
};

// Langs

export type LangsType = {
  iso_639_1: string;
  english_name: string;
  name: string;
  value: string;
  label: string;
};

//Collection type

export type PartsType = {
  adult: boolean;
  backdrop_path: string;
  title: string;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  poster_path: string;
  video: false;
  vote_average: number;
  vote_count: number;
  overview: string;
  id: number;
  release_date: string;
  popularity: number;
};

export type CollectionsType = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: Array<PartsType>;
};

//Sort
export type SortType = {
  results: Array<PopularType>;
  total_pages: number;
  total_results: number;
  page: number;
};
