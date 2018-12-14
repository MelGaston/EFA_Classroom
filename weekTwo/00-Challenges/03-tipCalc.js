function tipCalc(bill,quality) {
    var totalBill;
    var roundBill;
    
    if(quality=="excellent") {
        totalBill=(bill*0.25)+bill;
    } else if(quality=="good") {
        totalBill=(bill*0.2)+bill;
    } else {
        totalBill=(bill*0.15)+bill;
    }
    
    roundBill = totalBill.toFixed(2);
    return roundBill;
}

console.log(tipCalc(86.25,"good"));