import React ,{useState,useEffect,useContext,useReducer,useMemo,useRef,useCallback} from 'react'

const myContext = React.createContext(null);

let initualState = {name:'张三'}
function myReducer(state,action){
    switch(action.type){
        case 'a':
            return {name:state.name+'a'}
        case 'b':
            return {name:state.name+'b'}
        default:
            return{...state}
    }
}

const Practise = ()=>{
    let [count,setCount] = useState(0);
    useEffect(()=>{
        console.log(count)
    },[count>5])
    function myFn(){
        setCount(count+1);
    }
    let computedCount = useMemo(()=>count*10,[count])
    let myCallback = useCallback(()=>{
        
    })
    return<myContext.Provider value={'myContext'}>
        <div>我是count--{count}</div>
        <div>我是count的10倍--{computedCount}</div>
        <button onClick={myFn}>点击</button>
        <Child></Child>
    </myContext.Provider>
}
const Child =()=>{
    let value = useContext(myContext);
    let [state,dispatch] = useReducer(myReducer,initualState);
    let myRef = useRef();
    return(
    <div>
        <div ref={myRef}>{value}</div>
        <div>{state.name}</div>
        <button onClick={()=>{dispatch({type:'b'})}}>dispatch</button>
    </div>
    )
}

export default Practise