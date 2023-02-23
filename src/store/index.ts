import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rocketLaunchReducer } from "./features/rocket/rocketsSlice";
export const store = configureStore({
  reducer: {
    rocketLaunch: rocketLaunchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
