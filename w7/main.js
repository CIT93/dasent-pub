import { renderTbl } from "./render.js";
import { carbonHousePoints } from "./addcarbonpts.js";
import { carbonHouseholdPts } from "./addcarbonpts.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

// function displayOutObj(obj) {
//     console.log(obj);
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${obj.carbTotal}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in and size of home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of people in the house of ${obj.houseHld} (score: ${obj.houseHldPts}),`;
//     newP.textContent += ` and a ${obj.houseSz} size home (score:${obj.houseSizePoints}).`;
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);

// }

function start(houseHoldMembers, houseSize) {
    const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
    const carbonHouseSizePoints = carbonHousePoints(houseSize);
    const total = houseHoldPoints + carbonHouseSizePoints;
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const cfpStatement = {
        houseHld: houseHoldMembers,
        houseSz: houseSize,
        houseHldPts: houseHoldPoints,
        houseSizePoints: carbonHouseSizePoints,
        carbTotal: total,
        firstN: firstName,
        lastN: lastName,
    }
    cfpData.push(cfpStatement);
    

}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const homeSize = FORM.houses.value;
    start(houseMembers, homeSize, firstName, lastName)
    OUTPUT.innerHTML = "";
    // displayOutput()
    renderTbl(cfpData);
    
})


