/* eslint-disable @typescript-eslint/no-explicit-any */
import counterReducer from "@/redux/features.ts/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features.ts/cartSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";


const persistOptions = {
  key: "cart",
  storage,
};

const persistedCart = persistReducer(persistOptions, cartSlice);

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: persistedCart,
      counter: counterReducer,
    },
    middleware: (getDefaultMiddlewares: any) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
