import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const CounterSlice = createSlice(
    {
        name: "counter",
        initialState: initialState,
        reducers: {
            increase: (state: CounterState, _: PayloadAction<void>) => {
                state.value += 1;
            },
            decrease: (state: CounterState, _: PayloadAction<void>) => {
                state.value -= 1;
            },
        }
    },
)

export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;