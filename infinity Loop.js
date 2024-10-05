//Infinity for Loop

for(;;){
        let rand = Math.round(Math.random() * 10)
        if(rand === 7){
            console.log('Winner Winner = ' + rand);
            break
        }else{
            console.log('you have got ' + rand);
        
    } 
}