import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeCount: 0,
  test: '2222',
};

export const homeSlice = createSlice({
  name: 'home', // 命名空间 name值 action type 的前缀
  initialState, // 初始化状态数据
  // 1、定义reducer 更新状态函数 2、组件中dispatch使用action函数
  reducers: {
    add(state, { payload }) {
      console.log(state, 'ssss');
      state.homeCount += payload
    }
  },
  // 可以额外的触发其他slice中打的数据关联改变
  extraReducers:{

  }
})

// 导出action函数
export const { add } = homeSlice.actions

// 定义异步函数
export const subAsync = createAsyncThunk(
  'home/subAsync',
  async({getState})=>{
    const as = getState().homeCount
    setTimeout(() => {
      alert(as)
    }, 100);
  }
)
export const num = (state) => state.home.homeCount
export default homeSlice.reducer;