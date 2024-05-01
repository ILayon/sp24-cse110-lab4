for(let key in statistics){
    if(key[0].toLowerCase() === 'r' || (typeof statistics[key] === 'number' && statistics[key] % 2 !== 0)){
        console.log(statistics[key]);
    }
}