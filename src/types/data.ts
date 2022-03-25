export interface IRandomData {
  _id: string;
  releaseYear: number;
  overview: string;
  genre: string;
  imdbRating: number;
  runtime: string;
  name: string;
}

export interface IMovieList {
  imgUrl: string;
  title: string;
  description: string;
  id: string;
  releaseYear: number;
  rating: number;
}
