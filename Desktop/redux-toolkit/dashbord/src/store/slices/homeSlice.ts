import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  num: number
}

const initialState = { num: 0 } as CounterState

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    incrementHome(state) {
      state.num+=10
    },
    decrement(state,{payload}) {
      console.log(payload,'payload');
      state.num = state.num - payload
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.num += action.payload
    },
    resetHome(state) {
      state.num = 0
    },
  },
})

export const { incrementHome, decrement, incrementByAmount,resetHome } = homeSlice.actions
export default homeSlice.reducer