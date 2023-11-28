import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subAsync, num } from './homeSlice'

export function Home() {
  const [count, setCount] = useState(1)
  const dispatch = useDispatch();

  const homeCount = useSelector(num)
  const nums = useSelector(state=>state.home.homeCount)
  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  },[count])
  return (
    <>

      <button onClick={() => { dispatch(add(2)) }}>加2</button>
      <button onClick={() => { dispatch(subAsync()) }}>异步</button>
      <div>{homeCount}</div>
      {count}
      <div onClick={() => {
        setCount((c) => c + 1)
      }}>setCount</div>
      {nums}
    </>

  )
}