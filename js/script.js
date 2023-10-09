const unitPrice = 0.21;
let tripKm = parseFloat(prompt('Inserisci qui il numero dei chilometri da percorrere per il tuo viaggio'));
let age = parseFloat(prompt('Inserisci qui la tua età (da 0 a 120)'));
let finalPrice;
let divPrice = document.getElementById('price');
let failMsg = `Attenzione!!! <br>
Dati inseriti non correttamente!! <br>
Prego, inserire nuovamente chilometri e età, con valori numerici non negativi.`;


if (age > 65 && age <= 120){
    finalPrice =(unitPrice * tripKm)* 0.6;
    
} else if (age < 18 && age >= 0){
    finalPrice = (unitPrice * tripKm)* 0.8;
    
} else if (age> 17 && age <= 65){
    finalPrice =(unitPrice * tripKm);
}
else {
    divPrice.innerHTML = failMsg;
    console.log('Attenzione!!! Dati inseriti non correttamente!! Inserire chilometri e età con valori numerici non negativi');
    setTimeout(function(){
        window.location.reload();
     }, 5000);
}
if(finalPrice){
    divPrice.innerHTML = `Il costo del biglietto è: 
    € ${finalPrice.toFixed(2)}`;
    console.log('Il costo del biglietto è: €', finalPrice.toFixed(2));
}
