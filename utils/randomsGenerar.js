const randoms = (max) => {
    let numList = {};
    for (let i=0; i<=max || 100000000; i++){
        num = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        numList[num] = (numList[num] + 1) || 1 ;
        console.log(numList)
    }
    return numList;
}

process.send(randoms());