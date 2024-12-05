class DinOption {
    constructor(energyLvl, dinnerPrep, budget) {  
    this.energyLvl = energyLvl
    this.dinnerPrep = dinnerPrep
    this.budget = budget
    this.dinnerTime()
    this.dinnerCost()
    this.dinnerTotal();

    }

    dinnerTime () {
        if (this.energyLvl >= 6 && this.dinnerPrep == "true") {
            this.dinnerTime = "Cook your dinner";
        } else if (this.energyLvl >= 6 && this.dinnerPrep == "false") {
            this.dinnerTime = "Make Pasta 🍝";
        } else if (this.energyLvl <= 5 && this.dinnerPrep == "true") {
            this.dinnerTime = "Make instant pho 🍜";
        } else if (this.energyLvl <= 5 && this.dinnerPrep == "false") {
            this.dinnerTime = "Order Take Out 🍕🍔";
        }
    }

    dinnerCost() {
        if (this.dinnerTime === "Cook your prep dinner") {
            this.dinnerCost = 0;
        } else if (this.dinnerTime === "Make Pasta 🍝") {
            this.dinnerCost = 8;
        } else if (this.dinnerTime === "Make instant pho 🍜") {
            this.dinnerCost = 5;
        } else if (this.dinnerTime === "Order Take Out 🍕🍔") {
            this.dinnerCost = 10;
        }
    }

dinnerTotal() {
    
    this.dinnerTotal = this.budget - this.dinnerCost;

} 

}

export { DinOption }
