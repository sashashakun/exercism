'use strict';

module.exports = class Hamming {

  compute(first, second) {
      if (first.length !== second.length) throw new Error('DNA strands must be of equal length.')

      let distance = 0;
      let len = first.length;
      for (let i = 0; i < len; i++) {
        if (first[i] !== second[i]) distance++;
      }

      return distance;
  }

}
