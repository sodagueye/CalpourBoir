// recuperation id
let prix = document.getElementById("input");
let nbrePers = document.getElementById("Pers-input2");
let resultat =document.getElementById("Amount");
let total= document.getElementById("Total");
let costum = document.getElementById("btn6");
// let sert=document.getElementById("resert")
// prix.value ='0';
// nbrePers.value ="0";
total.innerText='0.00';
resultat.innerText='0.00'

function button1(){
    if(prix.value <= 0 || nbrePers.value <= 0){
         alert("saisir un nombre")
    }
    else{
        let prix1=(prix.value*15)/(100* nbrePers.value);
        let personne = prix.value/nbrePers.value + prix1;
        resultat.innerText=`$ ${prix1.toFixed(2)}`
        total.innerText=`$ ${personne.toFixed(2)}`
       
    }
}
button1();
// button2
function button2(){
    if(prix.value <= 0 || nbrePers.value <= 0){
         alert("saisir un nombre")
    }
    else{
  let prix2=(prix.value*5)/(100* nbrePers.value);
    let personne2 = prix.value/nbrePers.value + prix2;
   resultat.innerText=`$ ${prix2.toFixed(2)}`
    total.innerText=`$ ${personne2.toFixed(2)}`
}

}
button2();
// button3
function button3(){
    if(prix.value <= 0 || nbrePers.value <= 0){
        alert("saisir un nombre")
   }else{
    let prix3=(prix.value*10)/(100* nbrePers.value);
      let personne3 = prix.value/nbrePers.value + prix3;
     resultat.innerText=`$ ${prix3.toFixed(2)}`
      total.innerText=`$ ${personne3.toFixed(2)}`
   }
  
  }
  button3();
//   button4

function button4(){
    if(prix.value <= 0 || nbrePers.value <= 0){
        alert("saisir un nombre")
   }else{
    let prix4=(prix.value*25)/(100* nbrePers.value);
      let personne4 = prix.value/nbrePers.value + prix4;
     resultat.innerText=`$ ${prix4.toFixed(2)}`
      total.innerText=`$ ${personne4.toFixed(2)}`
    }
  }
  button4();
//   button5

function button5(){
    if(prix.value <= 0 || nbrePers.value <= 0){
        alert("saisir un nombre")
   }else{
    let prix5=(prix.value*50)/(100* nbrePers.value);
      let personne5 = prix.value/nbrePers.value + prix5;
     resultat.innerText=`$ ${prix5.toFixed(2)}`
      total.innerText=`$ ${personne5.toFixed(2)}`
    }
  
  }
  button5();
//   input  button costum
  costum.addEventListener('input', calculer)
  function calculer(e){
     if(prix.value <=0 || nbrePers.value <= 0 ||e.target.value <=0){
       alert("saisir les valeur")
     }
    else{
        let prixCost=(prix.value*e.target.value)/(100* nbrePers.value);
        let persTum = prix.value/nbrePers.value + prixCost;
       resultat.innerText=`$ ${prixCost.toFixed(2)}`
        total.innerText=`$ ${persTum.toFixed(2)}`
}
  }


    

  



    



 
 

