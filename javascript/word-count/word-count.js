'use strict';

module.exports = class Words {

  count(string) {

       let wordsArr = string
                        .replace(/\t/, '   ')
                        .replace(/\n/, ' ')
                        .split(' ');
       let res = {};
       let len = wordsArr.length;

       for (var i = 0; i < len; i++) {
            //TODO need to be changed
           if (typeof res[wordsArr[i]] === 'function') {
             res[wordsArr[i]] = 1;
           } else {
             if (res[wordsArr[i]] && wordsArr[i]) {
               res[wordsArr[i].trim()]++;
             } else if (wordsArr[i]) {
               res[wordsArr[i].trim()] = 1;
             }
           }

       }

       return res;
  }

}
