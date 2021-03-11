import {useState,useEffect, useRef,forwardRef,useImperativeHandle} from 'react'

const Input = (props,ref)=>{//可以通过forwardRef方法定义一个高阶组件，通过父级来创建ref

    const myRef = useRef();
    useImperativeHandle(ref,()=>({//可以通过此方法向父级传送一个对象合并到ref.current里，在父级通过current调用
        focus:()=>{
            ref.current.focus();
        }
    }))

    useEffect(()=>{
        ref.current.value = props.params;//ref.current来获取当前节点
    },[props.params])
    return <input ref={ref}/>
}

const InputBox =forwardRef(Input);

const Myusestate = ()=>{
    let [count, setCount] = useState(0);
    let [num,setNum] = useState(0);
    let [params,setParams] = useState('');
    let ref = useRef();

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
        console.log('mount??')
        return()=>{
            console.log('unmount??')
        }
    },[count&&num])//2参数是变量变了才会执行，写法&&可以两个变量都变了执行，逗号与||其中一个就行

    return <div>
        <div onClick={()=>{
        setCount(count+1);
        setNum(num+1);
        setParams(Math.random())
        }}>{count}</div>
        {/* <Input params={params}></Input> */}
        <InputBox ref={ref} params={params}></InputBox>
        {console.log(ref)}
    </div>
}

export default Myusestate