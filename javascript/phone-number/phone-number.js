'use strict';

module.exports = class PhoneNumber {

      constructor(input) {
        this.input = input;
      }

      toString() {
        return '(' + this.input.slice(0,3) + ') ' + this.input.slice(3,6) + '-' + this.input.slice(6);
      }

      number() {
        let phone = this.input.split(/\D/).join('');

        if (phone.length === 11 && phone[0] === '1') {
          return phone.slice(1, phone.length);
        } else if (phone.length === 10) {
            return phone;
        } else if (phone.length < 10 || phone.length > 10 || phone.length === 11 && phone[0] !== '1') {
          return '0000000000';
        }
      }

      areaCode() {
        let code = this.input.split(/\D/).join('').slice(0,3);
        return code;
      }

}
