"use strict";
function calculateAnnualRate (monthlyRate) {
    let annualRate = monthlyRate * 12;
    return annualRate;

}

function selectPlan(planName,monthlyRate) {
    console.log( planName + "Plan selected!");
    console.log ("$" + monthlyRate + "/mo");

    let annualRate =calculateAnnualRate (monthlyRate);
    console.log ( "$" + annualRate + "/yr");

    let planElement = document.getElementById('planname');
    planElement.innerHTML= planName;

    let monthlyrateElement = document.getElementById('monthlyrate');
    monthlyrateElement.innerHTML= "$" + monthlyRate + "/m"; 

    let annualrateElement = document.getElementById('annualrate');
    annualrateElement.innerHTML = "$" + annualRate + "/yr";

    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear( today.getFullYear() +1);

    let goodUntilElement = document.getElementById('gooduntil');
    goodUntilElement.innerHTML = nextYear.toDateString();
}
