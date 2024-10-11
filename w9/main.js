import { renderTbl } from "./render.js";
import { carbonHousePoints } from "./addcarbonpts.js";
import { carbonHouseholdPts } from "./addcarbonpts.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const firstNameEl = document.getElementById('firstName')
const lastNameEl= document.getElementById('lastName');
const submitEl = document.getElementById("submitError");

function start(firstName, lastName, houseHoldMembers, houseSize) {
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


FORM.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents page from refreshing to keep data
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const firstNameIsValid = firstNameEl.value !== ''; //field needs to be 
    const lastNameIsValid = lastNameEl.value !== ''; 
    if (firstNameIsValid && lastNameIsValid){ 
        submitEl.textContent = '';
        const houseMembers = parseInt(FORM.housem.value);
        const homeSize = FORM.houses.value;
        start(firstName, lastName, houseMembers, homeSize,)
        saveLS(cfpData)
        renderTbl(cfpData);
        FORM.reset(); 
    } else {
        submitEl.textContent = "Form requires first name and last name";
        
    }
})

//Function to validate a single field

function validateField(event){
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

firstNameEl.addEventListener('blur', validateField);
lastNameEl.addEventListener('blur', validateField);


