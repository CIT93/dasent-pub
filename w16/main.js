import { renderTbl} from "./render.js";
import { carbonHousePoints, carbonHouseholdPts} from "./addcarbonpts.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP} from "./fp.js";  
renderTbl(cfpData);



FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== ''){ 
        SUBMIT.textContent = '';
        const fpObj = new FP(
            FNAME.value, 
            LNAME.value, 
            parseInt(e.target.housem.value), 
            e.target.houses.value, 
            e.target.foodChoice.value, 
            e.target.foodSource.value, 
            e.target.houseItem.value,
            e.target.checkbox.value,
            parseInt(e.target.water.value));
        cfpData.push(fpObj)
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset(); 
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
        
    }
})

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