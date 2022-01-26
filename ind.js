 
    function celToFeh(celsius){
        var c = celsius;
        var cToF = c*9/5 + 32;
        const msg = `${c}\xB0C is ${cToF}\xB0F`;
        console.log(msg);
    }
     function  fehToCel(feh){
        var f = feh;
        var fToC =  (f-32)*5/9;
        const msg = `${f}\xB0F is ${fToC}\xB0C`;
        console.log(msg);
    }
    celToFeh(60);
    fehToCel(45);
    
 