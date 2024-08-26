class GuessingGame {
    constructor() {}
   

    setRange(min, max) {
        this.l = min;
        this.r = max;
    }

    guess() {
        return Math.ceil((this.l + this.r) / 2);
    }

    lower() {
        this.r = this.guess();
    }

    greater() {
        this.l = this.guess();
    }
}

module.exports = GuessingGame;
