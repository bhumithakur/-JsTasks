function toCalFact(n){
    if( n == 0 || n  == 1){
        return 1;
    }
    else {
    return n* toCalFact(n-1); 
    }
    
}
console.log(toCalFact(50));