import { renderTbl } from "./render.js";
import { carbonHousePoints } from "./addcarbonpts.js";
import { carbonHouseholdPts } from "./addcarbonpts.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";


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
    const houseMembers = parseInt(FORM.housem.value);
    const homeSize = FORM.houses.value;
    start(firstName, lastName, houseMembers, homeSize,)
    saveLS(cfpData)
    renderTbl(cfpData);
    FORM.reset();

})

