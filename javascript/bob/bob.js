//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
'use strict'

module.exports = class Bob {

    hey(input) {

      if (input.toUpperCase() === input && input.toLowerCase() !== input) {
        return 'Whoa, chill out!';
      }

      if (/^\s*$/.test(input)) {
        return 'Fine. Be that way!';
      }

      if (input.charAt(input.length - 1)  === '?') {
        return 'Sure.';
      }

      return 'Whatever.';
    }

}
