class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice
        this.houseHoldPoints();
        this.houseSizePoints();
        this.foodCarbonTotal();
        this.total();
    }

    houseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }
    houseSizePoints() {
        if (this.houseSize === "large house") {
            this.carbonHouseSizePoints = 10;
        } else if (this.houseSize === "medium house") {
            this.carbonHouseSizePoints = 7;
        } else if (this.houseSize === "small house") {
            this.carbonHouseSizePoints = 4;
        } else if (this.houseSize === "apartment") {
            this.carbonHouseSizePoints = 2;
        }
    }
    
    foodCarbonTotal() {
        if (this.foodChoice === "meat daily basis") {
            this.foodCarbonTotal = 10;
        } else if (this.foodChoice === "meat few times per week") {
            this.foodCarbonTotal = 8;
        } else if (this.foodChoice === "vegetarian") {
            this.foodCarbonTotal = 4;
        } else if (this.foodChoice === "vegan or wild meat") {
            this.foodCarbonTotal = 2;
        }

    }

    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodCarbonTotal;

    }
}

export { FP }
