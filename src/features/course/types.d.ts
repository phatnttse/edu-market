declare module "AppModels" {
  export type TCourseState = {
    errorMsg: string | null;
    courses: Course[];
    totalPages: number;
    currentPage: number;
    isLoading: boolean;
  };

  export interface TGetCourseParams extends BasePaginationRequest {
    category?: string[];
    minPrice?: number[];
    maxPrice?: number[];
    level?: string[];
    rating?: number[];
  }
}
