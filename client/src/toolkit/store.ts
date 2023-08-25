import { configureStore } from "@reduxjs/toolkit";
import { 
  TypedUseSelectorHook, 
  useSelector 
} from "react-redux";
import filterResultReducer from "./features/filterResultSlice";

const store = configureStore({
  reducer: {
    filterResult: filterResultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
