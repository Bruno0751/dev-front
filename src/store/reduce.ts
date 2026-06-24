import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}
const initialState: CounterState = {
  value: 0,
  status: "idle",
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export function fetchCount(amount = 1) {
  return new Promise<{
    data: number;
  }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: amount,
        }),
      500
    )
  );
}

export default counterSlice.reducer;
