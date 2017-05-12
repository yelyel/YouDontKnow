

// Buy as many phones as you can 


const ACCESSORIES_PRICE = 9.99;
const BALANCE  = 500;
const TAX_RATE = 0.081;

var phonePrice;

var result = [];


function getPhoneprice() {
  
  return phonePrice = Number(prompt("Preis des Telephons: "));

}



function calculateTotalPhoneprice(phoneP) {
  
  return  (phoneP + ACCESSORIES_PRICE + phoneP * TAX_RATE).toFixed(2);
}

function calculateNumberOfPhones(phoneP) {
  
  var balanceCheck = BALANCE;
  var counter = 1;
  var totalPurchase = 0;
  
  while (balanceCheck >  totalPurchase) {
    result[1] = totalPurchase;
    totalPurchase = counter * phoneP;
    counter++;
    result[0] = counter;
    
    
  } return result;

}


totalResult = calculateNumberOfPhones(calculateTotalPhoneprice(getPhoneprice()));

console.log("Antzahl Telephone: " + totalResult[0]);
console.log("$ " + totalResult[1].toFixed(2));
                                      
                                                               
//console.log(calculateTotalPurchase(calculateNumberOfPhones(getPhoneprice()) * calculateTotalPhoneprice(getPhoneprice())));


