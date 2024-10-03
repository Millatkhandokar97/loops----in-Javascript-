let i = 0
while (i < 10){
    console.log(i + ' Md Millat');
    i++
}


let isRunning = true
while(isRunning){
    let rand = Math.round(Math.random() * 10)
    if(rand === 7){
        console.log('Winner Winner = ' + rand);
        isRunning = false
    }else{
        console.log('you have got ' + rand);
    }
}   