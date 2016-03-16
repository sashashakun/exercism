'use strict';

module.exports = class BeerSong {

      verse(start) {
          let template = `${start} ${start == 1 ? 'bottle' : 'bottles'} of beer on the wall, ${start} ${start == 1 ? 'bottle' : 'bottles'} of beer.\nTake ${start == 1 ? 'it' : 'one'} down and pass it around, ${(start - 1 === 0) ? 'no more' : (start - 1)} bottles of beer on the wall.\n`;

          if (start === 0) return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

          return template;
      }

      sing(start, end) {
          let res = '';

          if (!end) end = 0;
          while (start >= end) {

            if (start === 0) {
              res += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
            } else {
              res += `${start} ${start == 1 ? 'bottle' : 'bottles'} of beer on the wall, ${start} ${start === 1 ? 'bottle' : 'bottles'} of beer.\nTake ${start === 1 ? 'it' : 'one'} down and pass it around, ${(start - 1 === 0) ? 'no more' : start - 1} ${(start - 1 === 1) ? 'bottle' : 'bottles'} of beer on the wall.${start !== end ? '\n\n' : '\n'}`;
            }

            start--;
          }

          return res;
      }
}
