class Triangle 
{
	constructor(arg){
        //console.log(arg);
    }

    area(json)
    {
    	return 0.5*json.base*json.height;
    }
}

module.exports = Triangle