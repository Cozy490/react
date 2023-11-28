// About.js
import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { incrementHome } from '@/store/slices/homeSlice';
import { increment,fetchAboutData } from '@/store/slices/aboutSlice';
import {AppDispatch} from '@/store/index';

function About() {
   // 使用 useDispatch 来触发 Redux actions
   const dispatch = useDispatch<AppDispatch>();
  // 使用 useSelector 来访问 Redux store 中的 state
  const aboutState = useSelector((state:any) => state.aboutSlice);
  const homeState = useSelector((state:any) => state.homeSlice);

  useEffect(() => {
    const params = {
      id: 1,
    }
    dispatch(fetchAboutData(params));  // 在组件加载时 dispatch action
  }, [dispatch]); 

  const handleButtonClick = () => {
    dispatch(increment(/* payload */));
    dispatch(incrementHome(/* payload */));
  };
  return (
    <div>
      <h2>About</h2>
      <button onClick={handleButtonClick}>Click me</button>
      {<p>Count: {aboutState.value}</p>}
      {<p>Count: {homeState.num}</p>}
      {/* Other content */}
      {/* {process.env.REACT_APP_API_URL} */}
      {process.env.NODE_ENV}
      {process.env.REACT_APP_MY_GlOBAL_VAR}
      <Outlet />
    </div>
  );
}

export default About;
