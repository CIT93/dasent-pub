import {FORM, submitEl, idEnergy, idBudget} from "./globally.js";
import {renderTbl } from "./render.js";
import {saveLS, arrObj} from "./storage.js"
import { DinOption } from "./class.js";

renderTbl(arrObj);

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const energyLvl = FORM.eneLvl.value;
    const dinnerPrep = FORM.dinPrep.value;
    const budget = FORM.dinBud.value;
    if (idEnergy.value !== "" && idBudget.value !== "") {
        const dinObj = new DinOption (energyLvl, dinnerPrep, budget);
        arrObj.push(dinObj)
        saveLS(arrObj);
        OUTPUT.innerHTML = "";
        renderTbl(arrObj);
        FORM.reset()
    } else {
        submitEl.textContent = "Form requires all input";

    }
})


const validateField = function (event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    if (field === '') {
        fieldError.textContent = `This is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }

};

idEnergy.addEventListener('blur', validateField);
idBudget.addEventListener('blur', validateField);

