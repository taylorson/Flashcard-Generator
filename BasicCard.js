BasicFlashCard = function(front, back) {
    this.front = front;
    this.back = back;

    this.guessed = 0;
};

BasicFlashCard.prototype.question = function(first_argument) {
    // body...
    return this.back;
};

BasicFlashCard.prototype.answer = function(first_argument) {
    // body...
    return this.front;
};


module.exports = BasicFlashCard;