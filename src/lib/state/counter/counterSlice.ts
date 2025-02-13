import { createSlice } from "@reduxjs/toolkit";


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
            increase: (state: CounterState) => {
                state.value += 1;
            },
            decrease: (state: CounterState) => {
                state.value -= 1;
            },
        }
    },
)

export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;