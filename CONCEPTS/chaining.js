let sum = (a)=>{
    return (b)=>{
        if(b){
            return sum(a+b);
        }
        else{
            return a;
        }
    };
};
console.log(sum(2)(3)(9587)());