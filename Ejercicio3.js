var tipos=function(x){
    let arreglo=x;
    x.forEach((letter) => {
        let tipo=typeof(letter);
        for(i=0;i<arreglo.length;i++){
            var cont=0;
            if(tipo==typeof(letter)){
                cont+=1;
            }
        }
        console.log("El tipo de dato "+tipo+" se repite "+cont+" veces");
    });
}

console.log(typeof(letter));