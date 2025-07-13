declare module "AppModels" {
  export type TAppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;

  export type TAppState = {
    isLoading: boolean;
    theme: "light" | "dark";
  };
}
