import { renderTbl} from "./render.js";
import { carbonHousePoints, carbonHouseholdPts} from "./addcarbonpts.js";
import { FORM, FNAME, LNAME, SUBMIT, WATER, BOTH } from "./global.js";
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
            e.target.water.value,
            e.target.dish_washer.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value),
            e.target.dish_washer.checked,
            parseInt(e.target.houseItem.value),
            parseInt(e.target.garbage.value),
            determineRecycleItems(e),
            parseInt(e.target.myCar.value),
            parseInt(e.target.pubTrans.value),
            parseInt(e.target.airplane.value)
        );

        cfpData.push(fpObj)
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset(); 
        BOTH.disabled = false;
        
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


WATER.addEventListener("change", e => {
    if (parseInt(WATER.value)===0){
        BOTH.disabled = true;
    } else {
        BOTH.disabled = false;
    }
})

const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return{
        glass: e.target.glass.checked,
        plastic: e.target.plastic.checked,
        paper: e.target.paper.checked,
        aluminum: e.target.aluminum.checked,
        steel: e.target.steel.checked,
        food: e.target.food.checked,
        recyclePoints: (24-(numberChecked*4))
    }
}