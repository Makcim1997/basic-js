const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
	let deafaultRepeatTimes = !options.repeatTimes ? 1 : options.repeatTimes;
	let defaultSeporator = !options.separator ? '+' : options.separator;
	let defaultAddition = typeof options.addition === 'undefined' ? '' : options.addition;
	let defaultAdditionRepeatTimes = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes;
	let defaultAdditionSeparator = !options.additionSeparator ? '' : options.additionSeparator;
		for( let i = 0; i < deafaultRepeatTimes; i++){
			res += str;
			for (let j = 0; j < defaultAdditionRepeatTimes; j++){
				res += defaultAddition;
				if (j + 1 < defaultAdditionRepeatTimes){
					res += defaultAdditionSeparator;
				}
			}
			if (i + 1 < deafaultRepeatTimes){
				res += defaultSeporator;
			}
		}
		return res;
}

module.exports = {
  repeater
};
