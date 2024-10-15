import { renderTbl } from "./render.js";
import { carbonHousePoints, carbonHouseholdPts } from "./addcarbonpts.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = (firstName, lastName, houseHoldMembers, houseSize) => {
    const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
    const carbonHouseSizePoints = carbonHousePoints(houseSize);
    const total = houseHoldPoints + carbonHouseSizePoints;
    cfpData.push({
        firstN: firstName,
        lastN: lastName,
        houseHld: houseHoldMembers,
        houseSz: houseSize,
        houseHldPts: houseHoldPoints,
        houseSizePoints: carbonHouseSizePoints,
        carbTotal: total,
    });

}

renderTbl(cfpData);


FORM.addEventListener('submit', e => {
    e.preventDefault(); //prevents page from refreshing to keep data
    if (FNAME.value !== '' && LNAME.value !== ''){ 
        SUBMIT.textContent = '';
        start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value,)
        saveLS(cfpData)
        renderTbl(cfpData);
        FORM.reset(); 
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
        
    }
})

//Function to validate a single field

const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

// rest operator
// const add2 = function(...a) { //a=10 is a default value

//     return 2+a[3]; // returns the value back to add2

//     }

//     const result = add2(1,2,3,4);

//IIFE
//  const a = 3;

// (function (a) {
//     console.log("inside IIFE");
//     console.log(a);
// })(a);