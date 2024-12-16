a =["help im stuck in this little box"];

function msg(){
    alert(a);
    console.log(a);
}

let fruits = ["apple","banana",'cherry'];
console.log(fruits);
fruits.forEach(item =>{console.log("item:" +item)});

for(let b in fruits){
    console.log(b);
}

for(let b of fruits){
    console.log(b);
}