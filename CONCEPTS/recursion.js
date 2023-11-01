const user = {
    'name' : 'Abhinav',
    'address' :{
        'personal' : {
            'city' : 'Lucknow',
            'area' : 'chinhat'
        },
        'office' : {
            'city' : 'Pune',
            'area' : 'hinjewadi'
        }
    }
}

let newObj =  {}
const flatten = (objName , parent) => {
    for (let key in objName) {
        if (typeof(objName[key])==='object'){
            flatten(objName[key] , parent+"_"+key)
        }
        else{
            newObj[parent+"_"+key] = objName[key];
            // console.log(newObj);
        }
    }
        
    
}

flatten(user , "user");
console.log(newObj);