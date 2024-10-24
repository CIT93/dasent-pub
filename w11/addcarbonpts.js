const carbonHouseholdPts = function(numberInHousehold) {
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

const carbonHousePoints = function(houseSize) {
  
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

const foodCarbonTotal = function(foodChoice) {
  
    let foodCarbonPoints = 0;
    
    if (foodChoice === "meat daily basis") {
        foodCarbonPoints = 10;
    } else if (foodChoice === "meat few times") {
        foodCarbonPoints = 8;
    } else if (foodChoice === "vegetarian") {
        foodCarbonPoints = 4;
    } else if (foodChoice === "vegan or wild meat") {
        foodCarbonPoints = 2;
    }

    return foodCarbonPoints
    
}

export{carbonHousePoints}
export{carbonHouseholdPts}
export{foodCarbonTotal}
