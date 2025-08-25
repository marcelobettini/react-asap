
import { createSlice } from "@reduxjs/toolkit"
import type { AppDispatch } from "../app/store"


const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented(state) {
            state.value++ //immer lets me mutate state directly... it remains immutable under the hood
        },
        //decrement
        decremented(state) {
            state.value--
        },
        //reset
        reset(state) {
            state.value = 0
        },
        //sintaxis más antigua
        incrementedByStep: (state, action) => {
            state.value += action.payload
        }
    },
})

//Thunk para lógica asincrónica (disparo un cambio que no se completa en tiempo real)
export const incrementedAsync = (step: number) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(incrementedByStep(step))
    }, 5000)
}


export const { incremented, decremented, reset, incrementedByStep, } =
    counterSlice.actions


export default counterSlice.reducer
