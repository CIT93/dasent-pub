const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

function carbonHouseholdPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints
}

function carbonHousePoints(houseSize) {

    let carbonHouseSizePoints = 0;

    if (houseSize === "large house") {
        carbonHouseSizePoints = 10;
    } else if (houseSize === "medium house") {
        carbonHouseSizePoints = 7;
    } else if (houseSize === "small house") {
        carbonHouseSizePoints = 4;
    } else if (houseSize === "apartment") {
        carbonHouseSizePoints = 2;
    }
    return carbonHouseSizePoints
}

function displayOutObj(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.carbTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseHld} (score: ${obj.houseHldPts}),`;
    newP.textContent += ` and a ${obj.houseSz} size of home (score:${obj.houseSizePoints}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP); 

}

function start(houseHoldMembers,houseSize,firstName,lastName) {
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
    const carbonHouseSizePoints = carbonHousePoints(houseSize);
    const total = houseHoldPoints + carbonHouseSizePoints
    const cfpStatement = {
        houseHld: houseHoldMembers,
        houseSz: houseSize,
        houseHldPts: houseHoldPoints,
        houseSizePoints: carbonHouseSizePoints,
        carbTotal: total
        firstN: firstName;
        lastN: lastName;
    }   
    
    cfpData.push(cfpStatement);
   
}

function displayOutput() {
    for (obj of cfpData) {
        console.log(obj)
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint total is ${obj.carbTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `Based on number in and size of home`;
        const newP = document.createElement("p");
        newP.textContent = `${obj.firstN} ${obj.lastN}This number is based on the number of people in the house of ${obj.houseHld} (score: ${obj.houseHldPts}),`;
        newP.textContent += ` and a ${obj.houseSz} size of home (score:${obj.houseSizePoints}).`;
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}


FORM.addEventListener('submit', function (e){
    e.preventDefault();
    const houseMembers = parseInt(FORM.housem.value);
    const homeSize = FORM.houses.value;
    start(houseMembers,homeSize)
    OUTPUT.innerHTML = "";
    displayOutput()
    FORM.reset()  
})