var humLang = prompt("enter hum lang ");
var whaleLang ;
for(var i =0; i< humLang.length; i++ ){
    if(humLang[i] == 'e' || humLang[i] == 'u'){
        whaleLang += humLang[i].repeat(2);
    }
    else{
        whaleLang += humLang[i];
    }
}
console.log("Human lang into whale lang will be" + whaleLang);