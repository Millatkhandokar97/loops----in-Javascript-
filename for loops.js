
for (let i = 0; i < 100; i++){
    if(i % 2 == 1){
        console.log(i + ' This is Odd Number');
    }   
}

for (let i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i + ' This is Even Number');
    }   
}


let sum = 0

for (let i = 0; i <= 100; i++){
    sum += i
    console.log(sum + ' + '+ i + ' = ' + (sum + i));
}

for (let i = 0; i <= 100; i++){
    if(i % 2 == 0){
    sum += i
    console.log(sum + ' + '+ i + ' = ' + (sum + i));
    }
}



