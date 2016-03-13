'use strict'

module.exports = class Gigasecond {

    constructor(inputDate) {
      this.inputDate = inputDate;
    }


    date() {
        return new Date(this.inputDate.getTime() + 1000000000000)
    }

}
