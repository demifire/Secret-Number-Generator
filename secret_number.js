'use strict';
module.exports = function() {
    return secretNumberGenerator();
};

function secretNumberGenerator(){
    const randomNum = Math.floor(Math.random() * 1000000);
    return function() {
        return randomNum;
    }
}

