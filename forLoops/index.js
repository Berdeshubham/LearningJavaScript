// example 1

// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
    
// }


//example 2


// let sum=0;
// let n= 5 //prompt("enter a num")
// // n=Number.parseInt(n)
// for(i=0;i<n;i++){
//     sum +=(i+1)
// }
// console.log(sum)



//for in loop 

let obj ={
    shubham:78,
    harry:80,
    pranjal:88,
    sayli:90
}

for(let a in obj){  // here a is store index
    console.log("marks of " + a + " are " + obj[a])
}


for(let b of "shubham"){  //here only accsept string and arry //here b is store values
    console.log(b)
}