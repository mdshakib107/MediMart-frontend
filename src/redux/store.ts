import counterReducer from "@/redux/features.ts/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
<<<<<<< HEAD
      counter: counterReducer,
    },
  });
};
=======
    counter: counterReducer
    },
  })
}
>>>>>>> 71d82315caf90550bac0aafae35a39008b136728

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
