window.calcular = function (){
    
 let weight = document.getElementById('weight').value
 let height = document.getElementById('height').value/100

 let imc = weight / (height * height);

 let message 

 if(imc < 18.5){
    message = 'su indice de masa corporal es bajo'
 }else if (imc >= 18.5 && imc <25 ){
    message = ' su indice de masa corporal es normal'
 }else if ( imc >= 25 && imc <30){
    message = ' usted tiene sobrepeso'
 }else{
    message = ' usted tiene obesidad'
 }

 document.getElementById('result').innerHTML = ` ${message}`

}