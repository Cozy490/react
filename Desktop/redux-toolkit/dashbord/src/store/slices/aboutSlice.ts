import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { basicApi } from '@/api/index'


interface CounterState {
  value: number,
  userName?: string
}
const initialState = { value: 0,userName:'' } as CounterState

// 创建异步 action
const fetchAboutData = createAsyncThunk(
  'aboutSlice/fetchAboutData',
    async (params:any, { dispatch,rejectWithValue }) => {
      try {
        console.log(params,'params')
        const res:any = await basicApi.getUserInfo({})
        dispatch(getUserInfo(res.data))
      } catch (err) {
        return rejectWithValue(err);
      }
    }
);




const aboutSlice = createSlice({
  name: 'aboutSlice',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    getUserInfo(state, action: PayloadAction<any>) {
      state.userName = action.payload
    }

  },
})
export { fetchAboutData };
export const { increment, decrement, incrementByAmount,getUserInfo } = aboutSlice.actions
export default aboutSlice.reducer

