let z= [12, 600 , 400 , 30 , 90 , 89 , 1 ,4 ,54 , 78];

const nl= z.length - 1

for(let i=0; i < nl ; i++){
    // console.log(i , '=============')
    for(let j = 0 ; j < nl-i ; j++){
    //   console.log(z[j] ,'--', z[j+1] , '---------')
    
        if(z[j] < z[j+1]){
            let temp = z[j+1];
            z[j+1] = z[j]
            z[j] = temp
        }
      
        
    
    }
 
}
for(let kth = 1 ; kth <= z.length;  kth++){
    
  console.log(`the ${kth}th largest element\nfrom array ${[z]}\nis ${z[kth-1]}`);
}