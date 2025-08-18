import { ACTIONS } from "./counterActions"

//1. DEFINIR EL ESTADO DEL CONTADOR
//EL ESTADO ES UN OBJETO CON UNA PROPIEDAD COUNT DE TIPO NUMBER

interface CounterState {
    count: number
}

export const initialState: CounterState = {
    count: 0
}

//2. Define tipos de acciones usando union types

export type CounterAction =
    | { type: typeof ACTIONS.DECREMENTED }
    | { type: typeof ACTIONS.INCREMENTED }
    | { type: typeof ACTIONS.INCREMENTED_BY; payload: number }
    | { type: typeof ACTIONS.RESET }


export const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case ACTIONS.INCREMENTED:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENTED:
            return { count: state.count - 1 }
        case ACTIONS.RESET:
            return { count: initialState.count }
        case ACTIONS.INCREMENTED_BY:
            return { count: state.count + action.payload }
        default:
            return state
    }

}
