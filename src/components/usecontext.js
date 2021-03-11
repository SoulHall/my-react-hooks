import {useState,useContext} from 'react';
import mycontext from '@/components/mycontext';

const {Provider,Consumer} = mycontext;

const Childold = ()=>{
    //原来的方式通过Consumer来渲染
    return <Consumer>
        {
            (value)=>{
                return<div>{value}</div>
            }
        }
    </Consumer>
}

const Child =()=>{
    const aa = useContext(mycontext);//react-hooks通过useContext
    console.log(aa,'aa')
    return <div>{aa}</div>
}

export default ()=>{
    let obj =useState({name:'hello'})
    return<Provider value={'hello'}>
        <Childold/>
        <Child/>
    </Provider>
}