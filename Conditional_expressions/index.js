let a =prompt("Hey whats your age?");
a = Number.parseInt(a); //converting the string to a number
if(a<0){
    alert("This is an invalid age")
}
else if(a<9){
    alert("You are a kid watch cartoon")
}
else if(a>=9 && a<18){
    alert("you can play GTA 5")
}
else{
    alert("you are adult you can drive car")
}
console.log("done")
console.log("you can" ,a<18? "not drive" : "drive" )