import counterReducer from "@/redux/features.ts/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features.ts/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      counter: counterReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
