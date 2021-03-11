import {useState,useMemo} from 'react';

export default()=>{
    const [a,setA] = useState(1);
    const [b,setB] = useState(1);
    const memoized= useMemo(()=>a+b,[a,b])//相当于vue的computed属性，在a，b有改动时更新memoized值

    return<div onClick={()=>{setA(a+1)}}>
        memoized:{memoized}、a的值:{a}
    </div>
}