import { 
  createSlice,
  type PayloadAction 
} from "@reduxjs/toolkit";

interface InitialState {
  message: string | null;
  isLoading: boolean;
  data: Destination | null
}

const initialState: InitialState = {
  message: null,
  isLoading: false,
  data: null,
};

const filterResult = createSlice({
  name: "filterResult",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      console.log(state.message)
    },
    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      console.log(state.isLoading)
    },
    setData: (state, action: PayloadAction<Destination>) => {
      state.data = action.payload;
      console.log(state.data)
    },
  },
});

export const {
  setMessage,
  toggleIsLoading,
  setData
} = filterResult.actions;

export default filterResult.reducer;
