import { 
  createSlice,
  type PayloadAction 
} from "@reduxjs/toolkit";

interface InitialState {
  message: string | null;
  isLoading: boolean;
  data: Destination[] | null
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
      return {
        message: action.payload,
        isLoading: false,
        data: null,
      };
    },
    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setData: (state, action: PayloadAction<Destination[]>) => {
      return {
        message: null,
        isLoading: false,
        data: action.payload
      };
    },
  },
});

export const {
  setMessage,
  toggleIsLoading,
  setData
} = filterResult.actions;

export default filterResult.reducer;
