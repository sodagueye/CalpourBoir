// recuperation id
let prix = document.getElementById("input");
let nbrePers = document.getElementById("Pers-input2");
let resultat =document.getElementById("Amount");
let total= document.getElementById("Total");
let costum = document.getElementById("btn6");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn44");
let btn5 = document.getElementById("btn5");
// let sert=document.getElementById("resert")
// prix.value ='0';
// nbrePers.value ="0";
total.innerText='0.00';
resultat.innerText='0.00'
// bouton2.addEventListener('click', () => {
//     item.style.backgroundColor = 'yellow';
// });
function calculatrice(){
    // if(prix.value <= 0 || nbrePers.value <= 0){
    //                alert("saisir une nombre positif")
    //         }
             
btn1.addEventListener('click',()=>{
    let prix1=(prix.value*15)/(100* nbrePers.value);
       let personne = prix.value/nbrePers.value + prix1;
        resultat.innerText=`$ ${prix1.toFixed(2)}`
       total.innerText=`$ ${personne.toFixed(2)}`

})
// button3
btn2.addEventListener('click',()=>{
let prix2=(prix.value*5)/(100* nbrePers.value);
    let personne2 = prix.value/nbrePers.value + prix2;
   resultat.innerText=`$ ${prix2.toFixed(2)}`
    total.innerText=`$ ${personne2.toFixed(2)}`
})
// button3
btn3.addEventListener('click',()=>{
let prix3=(prix.value*10)/(100* nbrePers.value);
      let personne3 = prix.value/nbrePers.value + prix3;
     resultat.innerText=`$ ${prix3.toFixed(2)}`
     total.innerText=`$ ${personne3.toFixed(2)}`
    })
    // button
    btn4.addEventListener('click',()=>{
        let prix4=(prix.value*25)/(100* nbrePers.value);
           let personne4 = prix.value/nbrePers.value + prix4;
        resultat.innerText=`$ ${prix4.toFixed(2)}`
       total.innerText=`$ ${personne4.toFixed(2)}`

    })

// button5
   btn5.addEventListener('click',()=>{
        let prix5=(prix.value*50)/(100* nbrePers.value);
      let personne5 = prix.value/nbrePers.value + prix5;
     resultat.innerText=`$ ${prix5.toFixed(2)}`
      total.innerText=`$ ${personne5.toFixed(2)}`
        
    })
    // button costum

costum.addEventListener('input', calculer)
  function calculer(e){
    let prixCost=(prix.value*e.target.value)/(100* nbrePers.value);
        let persTum = prix.value/nbrePers.value + prixCost;
       resultat.innerText=`$ ${prixCost.toFixed(2)}`
        total.innerText=`$ ${persTum.toFixed(2)}`

  }
}

 calculatrice()


  






    

  



    



 
 

