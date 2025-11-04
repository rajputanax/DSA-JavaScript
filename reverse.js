let rev = [12, 600 , 400 , 30 , 90 , 89 , 1 ,4 ,54 , 78];
console.log(rev , 'original')
let result = []

for(let i = rev.length-1 ; i > -1; i--){
result.push(rev[i])

}
console.log(result, 'reversed')
