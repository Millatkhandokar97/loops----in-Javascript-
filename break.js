//Break Statement

while(true){
    let rand = Math.round(Math.random() * 10)
    if(rand === 7){
        console.log('Winner Winner = ' + rand);
        break
    }else{
        console.log('you have got ' + rand);
    }
} 




for ( let i = 0; i < 11; i++){
    if(i % 5 === 0){
        console.log(i);
        break
    } else{
        console.log(i);
    }
}

for ( let i = 0; i < 11; i++){
    if(i % 5 === 6){
        console.log(i);
        break
    } else{
        console.log(i);
    }
}