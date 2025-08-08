// extension.js
(function(Scratch) {
  'use strict';

  class HoroscopeExtension {
    getInfo() {
      return {
        id: 'horoscope',
        name: '今日の運勢',
        blocks: [
          {
            opcode: 'getHoroscope',
            blockType: Scratch.BlockType.REPORTER,
            text: '今日の運勢（星座: [SIGN]）',
            arguments: {
              SIGN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'aries'
              }
            }
          }
        ]
      };
    }

    async getHoroscope(args) {
      const response = await fetch(`https://aztro.sameerkumar.website/?sign=${args.SIGN}&day=today`, {
        method: 'POST'
      });
      const data = await response.json();
      return data.description;
    }
  }

  Scratch.extensions.register(new HoroscopeExtension());
})(Scratch);
