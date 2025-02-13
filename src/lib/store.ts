import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "@/lib/state/counter/counterSlice";
import applicationReducer from "@/lib/state/applications/application_states";

export const makeStore = () => {
    return configureStore({
        reducer: {
            // dummy reducer
            counterReducer,

            // reducer to track windows on the screen
            applicationReducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']