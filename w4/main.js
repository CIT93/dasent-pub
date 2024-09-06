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

function start(houseHoldMembers, houseSize) {
    const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
    const carbonHouseSizePoints = carbonHousePoints(houseSize);
    const total = houseHoldPoints + carbonHouseSizePoints
    cfpData.push([houseHoldMembers, houseSize, houseHoldPoints, carbonHouseSizePoints, total])
}

function displayOutput(){
    for (arr of cfpData){
        console.log(arr)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `Your total household member is ${arr[0]}, add ${arr[2]} points to your carbon footprint. You live in a ${arr[1]}, add ${arr[3]} to your carbon footprint. Your carbon Footprint total is ${arr[4]}`;
        output.appendChild(newP)    
    }
}

start(5, "apartment");
start(4, "large hosue");
start(3, "medium house");
start(2, "apartment");

displayOutput()

