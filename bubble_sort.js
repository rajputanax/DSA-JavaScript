let x = [12, 600 , 400 , 30 , 90 , 89 , 1 ,4 ,54 , 78];
console.log( 'original un-sorted' , x)
const n = x.length - 1
let k = 1
for(let i=0; i < n ; i++){
    // console.log(i , '=============')
    for(let j = 0 ; j < n-i ; j++){
    //   console.log(x[j] ,'--', x[j+1] , '---------')
    
        if(x[j] > x[j+1]){
            let temp = x[j+1];
            x[j+1] = x[j]
            x[j] = temp
        }
      
        
    
    }
 
}

console.log('bubble sort in asc' , x)