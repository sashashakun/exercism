'use strict';

module.exports = class DnaTranscriber {

  toRna(input) {
      let res = '';
      let len = input.length;
      for (let i = 0; i <= len; i++) {
          if (input[i] === 'C') res += 'G';
          if (input[i] === 'G') res += 'C';
          if (input[i] === 'A') res += 'U';
          if (input[i] === 'T') res += 'A';
      }
      return res;
  }

}
