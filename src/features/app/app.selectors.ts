import type { RootState } from "@/redux/store";

export const selectAppStateInfo = (state: RootState) => state.app;
