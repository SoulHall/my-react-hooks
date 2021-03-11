import {useReducer} from 'react';

export default ()=>{
    let initialState = {count:0}
    function reducer(state,action){
        switch(action.type){
            case 1:
                return{count:state.count+1}
            case 2:
                return{count:state.count+2}
            default:
                return{count:state.count}
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);

    return<div>
        count:{state.count}
        <div onClick={()=>{dispatch({type:1})}}>dispatch+1</div>
        <div onClick={()=>{dispatch({type:2})}}>dispatch+2</div>
    </div>
}