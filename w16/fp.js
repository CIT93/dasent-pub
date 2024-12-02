class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterValue, waterConsum, both, houseItem) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice;
        this.foodSource = foodSource;
        this.waterValue= waterValue;
        this.waterConsumPoints = waterConsum;
        this.both = both;
        this.houseItemPts = houseItem;
        this.calHouseHoldPoints();
        this.calHouseSizePoints();
        this.calFoodCarbonTotal();
        this.calFoodSourcePoints();
        this.calTotal();
    }

    calHouseHoldPoints() {
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
    calHouseSizePoints() {
        if (this.houseSize === "large house") {
            this.houseSizePoints = 10;
        } else if (this.houseSize === "medium house") {
            this.houseSizePoints = 7;
        } else if (this.houseSize === "small house") {
            this.houseSizePoints = 4;
        } else if (this.houseSize === "apartment") {
            this.houseSizePoints = 2;
        }
    }

    calFoodCarbonTotal() {
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

    calFoodSourcePoints() {
        if (this.foodSource === "packed") {
            this.foodSourcePoints = 12;
        } else if (this.foodSource === "balance") {
            this.foodSourcePoints = 6;
        } else if (this.foodSource === "local") {
            this.foodSourcePoints = 2;
        }

    }

    calTotal() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodCarbonTotal + this.foodSourcePoints + this.waterConsumPoints + this.houseItemPts;

    }
}

export { FP }
