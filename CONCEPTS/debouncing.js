let count = 0;
const getData = ()=>{
    console.log("data fetching", count++);

}

const debounce = (fn , d) =>{
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            getData();
        },d)
    }
}

const betterFunc = debounce(getData , 300);