let counter = 0;
const getData = ()=>{
    console.log("getting data ..." , counter++);
}

const throttle = (fn , d)=>{
    let flag = true
    return function () {
        if(flag){
            fn();
            flag=false;
            setTimeout(()=>{
                flag = true;
            },d)
        }
    }
}

const betterFunc = throttle(getData , 2000);
window.addEventListener('resize' , betterFunc);