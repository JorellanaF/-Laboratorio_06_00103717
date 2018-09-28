var repeticion=function(x,y){
    let arreglo= x;
    var numero=y;
    var cont=0;
    arreglo.forEach((letter,index)=>{
        if(letter==numero){
            cont+=1;
        }
    });
    console.log('Se repiten '+cont+' veces');
};