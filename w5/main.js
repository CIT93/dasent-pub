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

function start(houseHoldMembers, houseSize) {
    const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
    const carbonHouseSizePoints = carbonHousePoints(houseSize);
    const total = houseHoldPoints + carbonHouseSizePoints
    const cfpStatement = {
        houseHld: houseHoldMembers,
        houseSz: houseSize,
        houseHldPts: houseHoldPoints,
        houseSizePoints: carbonHouseSizePoints,
        carbTotal: total
    }
    cfpData.push(cfpStatement);

    // displayOutObj(cfpStatement)

        //cfpData.push([houseHoldMembers, houseSize, houseHoldPoints, carbonHouseSizePoints, total])
    
}

function displayOutput() {
    for (obj of cfpData) {
        console.log(obj)
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
}


// function displayOutput() {
//     for (let i = 0; i < cfpData.length; i++) {
//         console.log(i)
//         const output = document.getElementById("output");
//         const newH2 = document.createElement("h2");
//         newH2.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
//         const newH3 = document.createElement("h3");
//         newH3.textContent = `Based on number in and size of home`;
//         const newP = document.createElement("p");
//         newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
//         newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
//         output.appendChild(newH2);
//         //output.appendChild(newH3);
//         //output.appendChild(newP); 
//     }
//}


start(5, "apartment");
start(4, "large hosue");
start(3, "medium house");
start(2, "apartment");

displayOutput()

