//function carbonHouseholdPts(numberInHousehold) {
//    console.log("Inside the function")
//    if (numberInHousehold === 1) {
//       carbonFootprintPoints = carbonFootprintPoints + 14;
//    } else if (numberInHousehold === 2) {
//        carbonFootprintPoints = carbonFootprintPoints + 12;
//    } else if (numberInHousehold === 3) {
//        carbonFootprintPoints = carbonFootprintPoints + 10;
//    } else if (numberInHousehold === 4) {
//        carbonFootprintPoints = carbonFootprintPoints + 8;
//    } else if (numberInHousehold === 5) {
//        carbonFootprintPoints = carbonFootprintPoints + 6;
//   } else if (numberInHousehold === 6) {
//        carbonFootprintPoints = carbonFootprintPoints + 4;
//   } else if (numberInHousehold > 6) {
//       carbonFootprintPoints = carbonFootprintPoints + 2;
//   }

//      console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`)
//   }

// let carbonFootprintPoints = 0;
// const numberInHousehold =3;

// global scope

// carbonHouseholdPts(3)
// carbonHouseholdPts(4)

let carbonHouseSizePoints = 0;

function carbonHousePoints(houseSize)

if (houseSize === "large house") {
    carbonHouseSizePoints = carbonHouseSizePoints + 10;
} else if (houseSize === "medium house") {
    carbonHouseSizePoints = carbonHouseSizePoints +7;
} else if (houseSize === "small house") {
    carbonHouseSizePoints = carbonHouseSizePoints +4;
} else if (houseSize === "apartment") {
    carbonHouseSizePoints = carbonHouseSizePoints +2;
}

console.log(`I live in a ${houseSize} and that adds ${carbonHouseSizePoints} points to my carbon footprint total.`)

houseSize ("large house")
houseSize ("apartment")
