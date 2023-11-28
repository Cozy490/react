// Home.js
// import { basicApi } from '@/api/index'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetHome } from '@/store/slices/homeSlice';
import { AppDispatch } from '@/store';
function Home() {
  // 使用 useDispatch 来触发 Redux actions
  const dispatch = useDispatch<AppDispatch>();
  // 使用 useSelector 来访问 Redux store 中的 state
  const homeState = useSelector((state:any) => state.homeSlice);
  useEffect(() => {
    // 在组件卸载时重置 homeState
    return () => {
      dispatch(resetHome());
    };
  }, [dispatch]);
  
  const handleButtonClick = () => {
    dispatch({type: 'homeSlice/decrement', payload: 1});
  };
  return (
    <div>
      <h2>Home</h2>;
      <button onClick={handleButtonClick}>Click me</button>
      {<p>Count: {homeState.num}</p>}
    </div>
   
  );
}

export default Home;
