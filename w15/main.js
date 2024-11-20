import { renderTbl } from "./render.js";
import { carbonHousePoints, carbonHouseholdPts} from "./addcarbonpts.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP} from "./fp.js";  

const start = function(firstName, lastName, houseHoldMembers, houseSize) {
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
    
    const cfpDataMap = carbTotal.map(data => {
        return data.length
    }  )
    console.log(cfpDataMap);

}


renderTbl(cfpData);

function addRow (tableID){
let tableRender = document.getElementById(tableID)
let newRow = tableRender.insertRow(-1)
let newCell = newRow.insertCell(0);
let newText = document.createTextNode("Average Points");
newCell.appendChild(newText);
}

addRow("myTable")


FORM.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents page from refreshing to keep data
    if (FNAME.value !== '' && LNAME.value !== ''){ 
        SUBMIT.textContent = '';
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodChoice.value);
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