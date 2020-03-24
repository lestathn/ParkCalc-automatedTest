const xPathToCss = require('xpath-to-css');

const arg = (argList => {
	let arg = {}, a, opt, thisOpt, curOpt;
	for (a = 0; a < argList.length; a++) {

		thisOpt = argList[a].trim();
		opt = thisOpt.replace(/^\-+/, '');

		if (opt === thisOpt) {
			// argument value
			if (curOpt) arg[curOpt] = opt;
				curOpt = null;
			} else {
				// argument name
				curOpt = opt;
				arg[curOpt] = true;
			}
		}

	return arg;
})(process.argv);


let css = xPathToCss(arg.path);
console.log(css);