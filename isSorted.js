

const check = (x)=>{
    for (let i=0 ; i < x.lengt; i++){
       if(x[i] < x[i+1]){
        console.log('yes')
       }
       else{               




        return false ;
       }
    };


};


const isSorted = [2, 4 , 6 ,7 ,7 ,8 ,9];

let  res = check(isSorted);

console.log(res)







