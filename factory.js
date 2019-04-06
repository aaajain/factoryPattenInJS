var globSync = require('glob').sync;
var impls = globSync('./impl/**/*.js', {
    cwd: __dirname
}).map(require);
//var tri = new impls[0](3);
//var sq = new impls[1](4);
//console.log(tri.constructor.name);
var classes = new Object();
for (var i = impls.length - 1; i >= 0; i--) {
	var instance = new impls[i];
	classes[instance.constructor.name] = instance;
}
//console.log(classes);
//console.log(classes['Square']['area'](4));

class Polygon 
{
	
	constructor(arg){
        this.className = arg;
    }

    get(fName,args)
    {
    	var res = classes[this.className][fName](args);
    	return res;
    }

}

module.exports= Polygon;
