export type IFormTypes = {
  imgUrl?: string;
  title: string;
  releaseYear?: number;
  description?: string;
  id?: string;
  rating?: number;
  createdAt?: number;
  reviews: { title: string; description: string; rating: number }[];
};


export type IReviewForm = {
  title: string;
  id: string;
  rating: number;
  description: string;
  createdAt: number;
};