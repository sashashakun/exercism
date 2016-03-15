'use strict';

module.exports = class Pangram {

      constructor(input) {
        this.input = input.toLowerCase();
      }

      isPangram() {
          let alphabet = [
                            'a', 'b', 'c', 'd',
                            'e', 'f', 'h', 'g',
                            'k', 'l', 'm', 'n',
                            'o', 'p', 'q', 'r',
                            's', 't', 'u', 'v',
                            'w', 'x', 'y', 'z'
                          ]
                          
          let len = alphabet.length;
          let res = true;

          for (var i = 0; i < len; i++) {
            if (this.input.search(alphabet[i]) === -1) res = false;
          }

          return res;
      }

}
