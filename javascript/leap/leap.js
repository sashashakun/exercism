'use strict';

module.exports = class Year {

  constructor(num) {
    this.num = num;
  }

  isLeap() {
    if (this.num % 4 === 0 && this.num % 100 === 0 && !(this.num % 400 === 0)) return false;
    if (this.num % 4 === 0 || this.num % 400 === 0) return true;
    return false;
  }

}
