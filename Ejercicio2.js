var promedio=function(x){
    let arreglo=x;
    var suma=0;
    var promedio=0;
    arreglo.forEach((letter,index)=> {
        suma+=parseInt(letter);
    });
    console.log(suma);
    promedio=(suma)/(x.length);
    console.log(promedio);
}