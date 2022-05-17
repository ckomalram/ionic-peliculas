/* eslint-disable @typescript-eslint/naming-convention */
// Generated by https://quicktype.io

export interface ResponseMDB {
  page:          number;
  results:       Pelicula[];
  total_pages:   number;
  total_results: number;
}

export interface Pelicula {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ko = 'ko',
  La = 'la',
}

// Para Detalles de peliculas Generated by https://quicktype.io

export interface MovieDetail {
  backdrop_path?:         string;
  belongs_to_collection?: BelongsToCollection;
  budget?:                number;
  adult?:                 boolean;
  genres?:                Genre[];
  homepage?:              string;
  id?:                    number;
  imdb_id?:               string;
  original_language?:     string;
  original_title?:        string;
  overview?:              string;
  popularity?:            number;
  poster_path?:           string;
  production_companies?:  ProductionCompany[];
  production_countries?:  ProductionCountry[];
  release_date?:          string;
  revenue?:               number;
  runtime?:               number;
  spoken_languages?:      SpokenLanguage[];
  status?:                string;
  tagline?:               string;
  title?:                 string;
  video?:                 boolean;
  vote_average?:          number;
  vote_count?:            number;
}

export interface BelongsToCollection {
  id:            number;
  name:          string;
  poster_path:   string;
  backdrop_path: string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

// Para Actores Generated by https://quicktype.io

export interface MovieCredits {
  id:   number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: Department;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          Department;
  job?:                 string;
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Creator = 'Creator',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}

