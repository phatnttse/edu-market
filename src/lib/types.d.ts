declare module "AppModels" {
  export interface BasePaginationRequest {
    page: number;
    limit: number;
    search?: string;
  }
}
