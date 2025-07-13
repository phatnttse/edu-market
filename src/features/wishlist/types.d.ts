declare module "AppModels" {
  export type TWishlistState = {
    errorMsg: string | null;
    items: Course[];
    totalItems: number;
  };
}
