import { renderTbl } from "./render.js";
import { carbonHousePoints, carbonHouseholdPts, foodCarbonTotal } from "./addcarbonpts.js";
import { FORM, FNAME, LNAME, FOODCARB, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP} from "./fp.js";  
const start = function(firstName, lastName, houseHoldMembers, houseSize) {
    const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
    const carbonHouseSizePoints = carbonHousePoints(houseSize);
    const total = houseHoldPoints + carbonHouseSizePoints + foodCarbonTotal;
    cfpData.push({
        firstN: firstName,
        lastN: lastName,
        houseHld: houseHoldMembers,
        houseSz: houseSize,
        foodCpts: foodCarbonTotal,
        houseHldPts: houseHoldPoints,
        houseSizePoints: carbonHouseSizePoints,
        carbTotal: total,
    });

}

renderTbl(cfpData);


FORM.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents page from refreshing to keep data
    if (FNAME.value !== '' && LNAME.value !== ''){ 
        SUBMIT.textContent = '';
        // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value,);
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodChoice.value);
        // fpObj.houseHoldPoints();
        // fpObj.houseSizePoints();
        cfpData.push(fpObj)
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset(); 
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
        
    }
})

//Function to validate a single field

const validateField = function(event){
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

class Human {
    constructor(name, hairColor, location, sleepScore){
        this.name= name
        this.hairColor= hairColor
        this.location= location
        this.sleepScore = sleepScore
    }
    introduce() {
       console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
    }
}

// const dasen = new Human("Dasen", "Black", "Office", 95)
// const jan = new Human("Jan", "Black", "Office", 95)

// dasen.introduce();
// jan.introduce();
// dasen.hrv=50;
