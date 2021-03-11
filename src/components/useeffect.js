import {useState,useEffect,useLayoutEffect} from 'react';

export default ()=>{
    const [count,setCount] =useState(0);

    useEffect(()=>{
        console.log(`我是useEffect${count}`)//useEffect执行时间取决于页面复杂度，如果页面复杂可能会延迟执行
    },[count])

    useLayoutEffect(()=>{//useLayoutEffect会比useEffect更快执行，它保证在更新dom时马上执行,一般不用，除非遇到useEffect延迟
        console.log(`我是useLayoutEffect${count}`)
    },[count])

    useEffect(()=>{
        let myInterval = setInterval(()=>{
            setCount(count+1)
        },1000)
        return()=>{
            clearInterval(myInterval);//可以用作清除上一次的hook，会在本次hook执行前执行，相当于unmount
        }
    })
    return <div onClick={()=>{setCount(count+1)}}>
        我是{count}
    </div>
}