// recuperation id
// let prix = document.getElementById("Bill-input")
// let nbrePers = document.getElementById("Pers-input2");
// let resultat =document.getElementById("Amount");
// let total=document.getElementById("Total");
// let buton1=document.getElementById("btn1")


function button1(){
    // 100 *15/100 = resultat tip Amount;
    // 100 / 3 + resulta
    let prix = document.getElementById("Bill-input")
    let nbrePers = document.getElementById("Pers-input2")
    let resultat =document.getElementById("Amount")
    let total=document.getElementById("Total")
    if(prix.value <=0 || nbrePers.value <=0){
         alert("saisir un nombre")
    }
    else{
        let prix1=(prix.value*15)/(100* nbrePers.value);
        let personne = prix.value/nbrePers.value + prix1;
        resultat.innerText=`$ ${prix1.toFixed(2)}`
        total.innerText=`$ ${personne.toFixed(2)}`
        // 
        // let prix2=(prix.value*5)/(100* nbrePers.value);
        // let personne2 = prix.value/nbrePers.value + prix1;
        // resultat.innerText=`$ ${prix2.toFixed(2)}`
        // total.innerText=`$ ${personne2.toFixed(2)}`
    }
}


    



 
 

