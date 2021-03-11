var obj ={
    age:10,
    fn:function(){
        return()=>{
            console.log(this.age);
        }
    }
}
var obj2={age:20};
var p1 = obj.fn();
var p2 = obj.fn.call(obj2);

async function fn1(){
    console.log('fn1 start');
    await fn2();
    console.log('fn1 end');
    setTimeout(()=>{
        console.log('time1')
    },0)
}
async function fn2(){
    console.log('fn2');
    setTimeout(()=>{
        console.log('time2')
    },0)
}
fn1();
console.log('out');
setTimeout(()=>{
    console.log('time3');
},0)