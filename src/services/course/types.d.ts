declare module "AppModels" {
  export type Course = {
    id: string;
    title: string;
    description: string;
    image: string;
    instructor: string;
    rating: number;
    students: number;
    price: number;
    originalPrice?: number;
    duration: string;
    level: string;
    category: string;
    badge?: string;
    reviewCount: number;
    lessons: number;
    longDescription: string;
    features: string[];
    curriculum: {
      title: string;
      duration: string;
      lessons: string[];
    }[];
    reviews: {
      id: number;
      name: string;
      avatar: string;
      rating: number;
      comment: string;
      date: string;
    }[];
  };
}
