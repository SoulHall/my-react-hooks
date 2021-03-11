import {useState,useCallback} from 'react';

export default ()=>{
    const [count,setCount] = useState(0);

    const call =useCallback(()=>{//返回一个叫memoized（具有备忘功能）的回调函数
        console.log('count：'+count)
        setCount(count+1);//内部count
    },[count])//会保存这个count值，如果不传参[]，name内部count永远为初始化的值

    console.log('render：'+count)

    return<div onClick={call}>
        点击次数{count}
    </div>
}